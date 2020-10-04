"use strict"

// <script src="Tools/AssetType/AssetType.js"></script>

function Tools_AssetTypeSaveCsv() {
    const CSV = [];
    const Groups = Object.keys(AssetTypeInfo);
    Groups.sort();
    Groups.forEach(G => {
        const Assets = Object.keys(AssetTypeInfo[G]);
        Assets.sort();
        Assets.forEach(A => {
            const Info = AssetTypeInfo[G][A];
            const PrintAll = D => {
                var Types = Object.keys(Info.Types);
                Types.sort();
                Types.forEach(T => CSV.push(Tools_AssetTypeDialogFind(G, A, D, T, Info)));
            };
            CSV.push(Tools_AssetTypeDialogFind(G, A, "Select", undefined, Info));
            PrintAll("");
            PrintAll("Set");
        });
    });

    const blob = new Blob([CSV.join("\n")], { type: 'text/csv' });
    const elem = window.document.createElement('a');
    elem.href = window.URL.createObjectURL(blob);
    elem.download = "Female3DCG_Type.csv";
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
}

function Tools_AssetTypeSaveJs() {
    let File = '"use strict"\n\nvar AssetTypeInfo = {\n';
    let getBuffer = str => File += str;
    let indent = 1;
    const write = (str, i) => {
        getBuffer('\t'.repeat(str == "}" ? indent - 1 : indent) + str + (i != 1 ? ',\n' : "\n"));
        indent += i ?? 0;
    };
    const stringifyProperty = (P, N) => {
        if (Array.isArray(P)) return `[${P.map(s => `"${s}"`).join(', ')}]`;
        if (typeof P == 'boolean' || typeof P == 'number') return P.toString();
        if (typeof P == 'string') return `"${P}"`;
        throw new Error(`Invalid Property Type, ${typeof P} ${N} ${JSON.stringify(P)}`);
    }
    const stringifyExperssion = E => {
        if (typeof E.Timer == 'number') return `{ Group: "${E.Group}", Name: "${E.Name}", Timer: ${E.Timer} }`;
        return `{ Group: "${E.Group}", Name: "${E.Name}" }`;
    }
    const Groups = Object.keys(AssetTypeInfo);
    Groups.sort();
    Groups.forEach(G => {
        write(`${G}: {`, 1);
        const Assets = Object.keys(AssetTypeInfo[G]);
        Assets.sort();
        Assets.forEach(A => {
            const Info = AssetTypeInfo[G][A];
            if (Info.CopyFrom && Info.CopyFrom.Group && Info.CopyFrom.Asset) {
                write(`${A}: { CopyFrom: { Group: "${Info.CopyFrom.Group}", Asset: "${Info.CopyFrom.Asset}" } }`);
                return;
            }
            write(`${A}: {`, 1);
            write(`NoneTypeName: "${Info.NoneTypeName}", DrawType: "${Info.DrawType}", ShowCount: ${Info.ShowCount}, Unextend: ${Info.Unextend}, TypeLocking: ${Info.TypeLocking}, SelectBeforeWear: ${Info.SelectBeforeWear}, TypedName: ${Info.TypedName}, ExtraPublish: ${Info.ExtraPublish}, DialogNpc: "${Info.DialogNpc}"`)
            if (Info.PublishTypeTransform) write(`PublishTypeTransform: "${Info.PublishTypeTransform}"`);
            let types = "";
            let emptyCount = 0;
            getBuffer = str => types += str;
            write(`Types: {`, 1);
            const Types = Object.keys(Info.Types);
            Types.forEach(T => {
                const Type = Info.Types[T];
                let open = "";
                getBuffer = str => open += str;
                write(`${T}: {`, 1);
                let data = "";
                getBuffer = str => data += str;
                if (Type.Property && Object.keys(Type.Property).length > 0) {
                    const PS = Object.keys(Type.Property).filter(P => Type.Property[P] != null);
                    PS.sort();
                    write(`Property: { ${PS.map(P => P + ": " + stringifyProperty(Type.Property[P], P)).join(', ')} }`)
                }
                if (Type.Skills) {
                    write(`Skills: { ${Object.keys(Type.Skills).map(S => S + ": " + Type.Skills[S]).join(', ')} }`)
                }
                if (Type.Prerequisite) {
                    write(`Prerequisite: [${Type.Prerequisite.map(s => `"${s}"`).join(", ")}]`)
                }
                if (Type.Expression) {
                    write(`Expression: [${Type.Expression.map(stringifyExperssion).join(", ")}]`)
                }
                getBuffer = str => types += str;
                if (data.trim().length == 0) {
                    --indent;
                    ++emptyCount;
                    write(`${T}: {}`);
                } else {
                    types += open + data;
                    write('}', -1);
                }
            });
            write('}', -1);
            getBuffer = str => File += str;
            if (emptyCount == Types.length) {
                write(`Types: [${Types.map(s => `"${s}"`).join(", ")}]`);
            } else {
                File += types;
            }
            if (!Info.DynamicDictionary.Default) {
                write(`DynamicDictionary: ${Info.DynamicDictionary.toString().replace(/\s+/gs, ' ')}`)
            }
            if (!Info.DynamicAllowType.Default) {
                write(`DynamicAllowType: ${Info.DynamicAllowType.toString().replace(/\s+/gs, ' ')}`)
            }
            if (!Info.DynamicAllowSetType.Default) {
                write(`DynamicAllowSetType: ${Info.DynamicAllowSetType.toString().replace(/\s+/gs, ' ')}`)
            }
            write('}', -1);
        });
        write('}', -1);
    });

    File += "}\n\n";

    const blob = new Blob([File], { type: 'text/javascript' });
    const elem = window.document.createElement('a');
    elem.href = window.URL.createObjectURL(blob);
    elem.download = "AssetTypeInfo_Final.js";
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);

}

function Tools_AssetTypeDialogFind(G, A, D, T, I) {
    const Desc = AssetTypeDialog[G] && AssetTypeDialog[G][A] && AssetTypeDialog[G][A][D || "Name"];
    const Text = Desc && Desc[T === undefined ? "Default" : (T || I.NoneTypeName)];
    if (Text) return [G,A,D || "Name", T === undefined ? "Default" : (T || I.NoneTypeName), Text];

    if (T !== undefined)
        return [G, A, D || "Name", T || I.NoneTypeName, DialogFind(Player, I["Dialog" + D] + T || I.NoneTypeName, G).replaceAll(",", '","').replaceAll("\n", '"\n"') || "###MISSING###"];
    return [G, A, D || "Name", "Default", DialogFind(Player, I["Dialog" + D]).replaceAll(",", '","').replaceAll("\n", '"\n"') || "###MISSING###"];
}

function Tools_AssetTypeTransform(FullName, Dialog, DialogSelect, DialogSet, DialogNpc, DrawType) {
    const Options = window["Inventory" + FullName + "Options"];
    if (!Options) {
        console.log(FullName);
    }
    const Info = {
        Dialog: Dialog,
        DialogSelect: DialogSelect,
        DialogSet: DialogSet,
        DialogNpc: DialogNpc,
        Unextend: true,
        ShowCount: Math.min(8, Options.length),
        SelectBeforeWear: true,
        ExtraPublish: true,
        DrawType: DrawType || "Images",
        TypeLocking: false,
        TypedName: false,
        Types: {},
    }
    Options.forEach(O => {
        const Name = O.Name;
        if (O.Property && O.Property.Type && O.Property.Type != Name) {
            console.log("Tools_AssetTypeTransform() - Error");
        }
        const Type = Info.Types[Name] = {}
        if (O.Property) {
            if (!O.Property.Type) Info.NoneTypeName = Name;
            Type.Property = O.Property;
            delete Type.Property.Type;
        }
        if (typeof O.RequiredBondageLevel === "number") {
            Type.Skills = { Bondage: O.RequiredBondageLevel };
        }
        if (typeof O.BondageLevel === "number") {
            Type.Skills = { Bondage: O.BondageLevel };
        }
        if (typeof O.SelfBondageLevel === "number") {
            Type.Skills = Object.assign({}, Type.Skills, { SelfBondage: O.SelfBondageLevel });
        }
        if (Array.isArray(O.Prerequisite)) {
            Type.Prerequisite = O.Prerequisite;
        }
        if (Array.isArray(O.Expression)) {
            Type.Expression = O.Expression;
        }
    });
    ["Options", "Load", "Draw", "Click", "PublishAction", "NpcDialog"].forEach(F => {
        if (window["Inventory" + FullName + F] != undefined) window["Inventory" + FullName + F] = undefined;
    })
    return Info;
}

function Tools_AssetTypeReport(count) {
    const ATP = {
        Extended: Object
            .keys(window)
            .filter(fn => fn.startsWith("Inventory") && fn.endsWith("Load"))
            .length,
        Converted: Object
            .keys(window)
            .filter(fn => fn.startsWith("Inventory") && fn.endsWith("Load"))
            .filter(fn => window[fn]?.toString().includes("ExtendedItemLoad"))
            .length,
        Next: Object
            .keys(window)
            .filter(fn => fn.startsWith("Inventory") && fn.endsWith("Load"))
            .filter(fn => window[fn]?.toString().includes("ExtendedItemLoad"))
            .map(fn => fn.replace("Inventory", "").replace("Load", "")),
        TypeInfo: count
    };
    ATP.Auto = ATP.Next.map(Tools_AssetTypeAutoConvert);
    console.log("--- AssetTypeProgress ---");
    console.log(ATP);
    console.log("--- AssetTypeProgress ---");
}

function Tools_AssetTypeAutoConvert(Name) {
    const Dialog = window["Inventory" + Name + "Draw"].toString().replace(/.*ExtendedItem.*\(.*,[ ]{0,}"(.*)"\).*/gis, (_, m) => m);
    if (!Dialog || Dialog.includes("function")) return `Error: Dialog {${Name}}`;
    const DialogSelect = window["Inventory" + Name + "Load"].toString().replace(/.*ExtendedItem.*\(.*,[ ]{0,}"(.*)"\).*/gis, (_, m) => m);
    if (!DialogSelect || DialogSelect.includes("function")) return `Error: DialogSelect {${Name}}`;
    const DialogSet = window["Inventory" + Name + "PublishAction"]?.toString().replace(/.*=[ ]{0,}"(\w*)".*/gis, (_, m) => m);
    if (!DialogSet || DialogSet.includes("function")) return `Error: DialogSet {${Name}}`;
    const DialogNpc = InventoryItemBootsToeTapeNpcDialog.toString().replace(/.*DialogFind\(.*"(.*)"[ ]{0,}\+.*/gis, (_, m) => m);
    if (!DialogNpc || DialogNpc.includes("function")) return `Error: DialogNpc {${Name}}`;
    return `Tools_AssetTypeTransform("${Name}", "${Dialog}", "${DialogSelect}", "${DialogSet}", "${DialogNpc}")`;
}

function Tools_AssetTypeInfoPreload() {
    for (let Group in Tools_AssetTypeInfo) {
        for (let Asset in Tools_AssetTypeInfo[Group]) {
            if (!AssetTypeInfo[Group]) AssetTypeInfo[Group] = {};
            if (!AssetTypeInfo[Group][Asset]) AssetTypeInfo[Group][Asset] = Tools_AssetTypeInfo[Group][Asset];
        }
    }
    // AssetTypeInfo.ItemArms.Web.DynamicDictionary = function (_, Item, OldType) {
    //     const keys = Object.keys(AssetTypeInfo.ItemArms.Web.Types);
    //     const NewIndex = keys.indexOf(InventoryItemGetType(Item));
    //     const PreviousIndex = keys.indexOf(OldType);
    //     const ActionDialog = DialogFind(Player, NewIndex > PreviousIndex ? "tightens" : "loosens", "ItemArms");
    //     return [{ Tag: "Action", Text: ActionDialog }];
    // }
    // AssetTypeInfo.ItemArms.Chains.TypeLocking = true;
    // AssetTypeInfo.ItemArms.DuctTape.DynamicAllowSetType = function (C, Item, Type) {
    //     if (InventoryGet(C, "Cloth") || InventoryGet(C, "ClothLower")) {
    //         DialogExtendedMessage = DialogFind(Player, "RemoveClothesForItem", "ItemArms");
    //         return false;
    //     }
    //     return true;
    // }
}