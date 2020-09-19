"use strict"

/* TODO
 *
 * Expression
 * Prerequisite
 * Lock Type with locks (ItemArms Chains)
 * 
 * 
 * ItemArmsWeb DynamicDictionary
 * InventoryItemArmsDuctTapeValidate
 * 
 */

var AssetTypeSelectBefore = false;

const AssetTypeControlledProperties = ["Effect", "Block", "SetPose", "Difficulty", "SelfUnlock", "Hide"];
const AssetTypeDescription = {};
let AssetTypeDrawType = AssetTypeDrawTypeWithImage;
let AssetTypeClickType = AssetTypeClickTypeWithImage;

/** The X & Y co-ordinates of each option's button, based on the number to be displayed per page. */
const AssetTypeXY = [
    [], //0 placeholder
    [[1385, 500]], //1 option per page
    [[1185, 500], [1590, 500]], //2 options per page
    [[1080, 500], [1385, 500], [1695, 500]], //3 options per page
    [[1185, 400], [1590, 400], [1185, 700], [1590, 700]], //4 options per page
    [[1080, 400], [1385, 400], [1695, 400], [1185, 700], [1590, 700]], //5 options per page
    [[1080, 400], [1385, 400], [1695, 400], [1080, 700], [1385, 700], [1695, 700]], //6 options per page
    [[1020, 400], [1265, 400], [1510, 400], [1755, 400], [1080, 700], [1385, 700], [1695, 700]], //7 options per page
    [[1020, 400], [1265, 400], [1510, 400], [1755, 400], [1020, 700], [1265, 700], [1510, 700], [1755, 700]], //8 options per page
];


function AssetTypeLoad() {
    let Tools_Count = 0;

    Asset.forEach(A => {
        A.ExtendedOrTypeInfo = A.Extended;

        const Group = AssetTypeInfo[A.Group.Name.replace(/[23]/g, "")]
        if (Group == null) return;
        const Info = Group[A.Name];
        if (typeof Info === 'string') return;
        if (Info == null) return;

        if (Info.DynamicDictionary == null) Info.DynamicDictionary = function () { return []; };
        if (Info.DynamicAllowType == null) Info.DynamicAllowType = function () { return A.AllowType; };

        if (A.Extended && Info.Unextend) A.Extended = false;

        A.TypeInfo = Info;
        A.ExtendedOrTypeInfo = true;
        A.AllowType = Object.keys(Info.Types).map(T => T == Info.NoneTypeName ? null : T);

        Tools_Count++;
    });
    AssetTypeLoadDescription();

    Tools_AssetTypeReport(Tools_Count);
}


async function AssetTypeLoadDescription() {
    const Data = await fetch('Assets/Female3DCG/Female3DCG_Type.csv').then(r => r.text());
    const CSV = CommonParseCSV(Data);
    CSV.forEach(value => {
        const [G, A, N, T, D] = value;
        if (!AssetTypeDescription[G]) AssetTypeDescription[G] = {};
        if (!AssetTypeDescription[G][A]) AssetTypeDescription[G][A] = {};
        if (!AssetTypeDescription[G][A]) AssetTypeDescription[G][A] = {};
        if (!AssetTypeDescription[G][A][N]) AssetTypeDescription[G][A][N] = {};
        AssetTypeDescription[G][A][N][T || "Default"] = D;
    });
}

function AssetTypeSetLoad(Item) {
    const C = CharacterGetCurrent();

    if (Item == null) Item = DialogFocusItem;
    if (DialogFocusItem.Property == null) DialogFocusItem.Property = { Type: DialogFocusItem.Asset.AllowType[0] };
    if (DialogFocusItem.Asset.Extended) {
        if (typeof window["Inventory" + DialogFocusItem.Asset.Group.Name + DialogFocusItem.Asset.Name + "Load"] === 'function') {
            window["Inventory" + DialogFocusItem.Asset.Group.Name + DialogFocusItem.Asset.Name + "Load"](Item);
        } else {
            console.log("Trying to launch invalid function: Inventory" + DialogFocusItem.Asset.Group.Name + DialogFocusItem.Asset.Name + "Load()");
        }
    }
    ExtendedItemSetOffset(0);
    DialogExtendedMessage = AssetTypeDescription[Item.Asset.Group.Name][Item.Asset.Name]["Select"]["Default"];

    AssetTypeDrawType = AssetTypeDrawTypeWithImage;
    AssetTypeClickType = AssetTypeClickTypeWithImage;
}

function AssetTypeSetDraw() {
    if (DialogFocusItem == null || DialogFocusItem.Asset.TypeInfo == null) return;

    const C = CharacterGetCurrent();
    const Asset = DialogFocusItem.Asset;
    const Info = Asset.TypeInfo;
    const Types = Info.DynamicAllowType(DialogFocusItem);
    const Offset = ExtendedItemGetOffset();
    const ShowCount = Math.min(Info.ShowCount, Types.length);
    const Description = AssetTypeDescription[Asset.Group.Name][Asset.Name]["Name"];

    if (Offset >= ShowCount) {
        DrawButton(1665, 25, 90, 90, "", "White", "Icons/Prev.png");
    }
    if (Types.length > ShowCount && Offset < ShowCount * Math.floor(Types.length / ShowCount)) {
        DrawButton(1775, 25, 90, 90, "", "White", "Icons/Next.png");
    }

    // Draw the header and item
    DrawRect(1387, 55, 225, 275, "white");
    DrawImageResize("Assets/" + Asset.Group.Family + "/" + Asset.Group.Name + "/Preview/" + Asset.Name + ".png", 1389, 57, 221, 221);
    // TODO Dynamic Description
    DrawTextFit(Asset.Description, 1500, 310, 221, "black");
    DrawText(DialogExtendedMessage, 1500, 375, "white", "gray");

    // Draw the possible variants and their requirements, arranged based on the number per page
    for (let I = Offset; (I < Types.length) && ((ShowCount == 0) || (I < ShowCount + Offset)); I++) {
        AssetTypeDrawType(C, Asset, Info, Types, ShowCount, Description, Offset, I);
    }
}

function AssetTypeDrawTypeWithImage(C, Asset, Info, Types, ShowCount, Description, Offset, I) {
    const X = AssetTypeXY[ShowCount][I - Offset][0];
    const Y = AssetTypeXY[ShowCount][I - Offset][1];
    const Type = Types[I] || Info.NoneTypeName;
    const IsSelected = !AssetTypeSelectBefore && InventoryItemIsType(DialogFocusItem, Types[I])
    DrawButton(X, Y, 225, 275, "", IsSelected ? "#888888" : AssetTypeSkillCheck(Info.Types[Type], C.ID == 0) ? "Pink" : "White");
    DrawImage("Screens/Inventory/" + Asset.Group.Name + "/" + Asset.Name + "/" + Type + ".png", X - 1, Y - 1);
    DrawText(Description[Type], X + 112, Y + 250, 225, "black");
}

function AssetTypeSetClick() {
    if (DialogFocusItem == null || DialogFocusItem.Asset.TypeInfo == null) return;

    // Exit button
    if (MouseIn(1885, 25, 90, 85)) {
        DialogFocusItem = null;
        return;
    }

    const C = CharacterGetCurrent();
    const Asset = DialogFocusItem.Asset;
    const Info = Asset.TypeInfo;
    const Types = Info.DynamicAllowType(DialogFocusItem);
    const Offset = ExtendedItemGetOffset();
    const ShowCount = Math.min(Info.ShowCount, Types.length);

    // Pagination buttons
    if (MouseIn(1665, 25, 90, 90) && Offset >= ShowCount) {
        ExtendedItemSetOffset(Offset - ShowCount);
    }
    if (MouseIn(1775, 25, 90, 90) && Types.length > ShowCount && Offset < ShowCount * Math.floor(Types.length / ShowCount)) {
        ExtendedItemSetOffset(Offset + ShowCount);
    }

    for (let I = Offset; (I < Types.length) && ((ShowCount == 0) || (I < ShowCount + Offset)); I++) {
        if (AssetTypeClickType(C, Info, Types, ShowCount, Offset, I)) return;
    }
}

/**
 * 
 * @param {Character} C 
 * @param {TypeInfo} Info 
 * @param {string[]} Types 
 * @param {number} ShowCount 
 * @param {number} Offset 
 * @param {number} I 
 */
function AssetTypeClickTypeWithImage(C, Info, Types, ShowCount, Offset, I) {
    const X = AssetTypeXY[ShowCount][I - Offset][0];
    const Y = AssetTypeXY[ShowCount][I - Offset][1];

    if (MouseIn(X, Y, 225, 275) && (AssetTypeSelectBefore || !InventoryItemIsType(DialogFocusItem, Types[I]))) {
        const Type = Info[Types[I] || Info.NoneTypeName];
        const R = AssetTypeSkillCheck(Type, C.ID == 0);
        if (R) {
            DialogExtendedMessage = DialogFind(Player, "Require" + R.Skill + "Level").replace("ReqLevel", R.Level);
            return true;
        } 
        if (Type.Prerequisite && !InventoryAllow(C, Type.Prerequisite, true)) {
            DialogExtendedMessage = DialogText;
            return;
        }
        if (AssetTypeSelectBefore) {
            AssetTypeSelectBefore = false;
            AssetTypePreSet(C, DialogFocusItem, Types[I]);
        } else {
            AssetTypeSet(C, DialogFocusItem, Types[I]);
        }
        if (DialogInventory != null) {
            DialogFocusItem = null;
            DialogMenuButtonBuild(C);
        }
        return true;
    }
    return false;
}

/**
 * 
 * @param {Character} C 
 * @param {Item} Item 
 * @param {string} NewType 
 */
function AssetTypeSet(C, Item, NewType) {
    if (CurrentScreen == "ChatRoom") {
        Item = InventoryGet(C, Item ? Item.Asset.Group.Name : C.FocusGroup.Name);
        if (Item.Asset.Extended) window["Inventory" + Item.Asset.Group.Name + Item.Asset.Name + "Load"]();
    }

    if (Item.Property) Item.Property.Type = NewType;
    else Item.Property = { Type: NewType };

    AssetTypeSetMofifiers(Item, NewType);

    if (Item.Asset.Category == "Item") {
        CharacterRefresh(C);
        ChatRoomCharacterUpdate(C);
        if (CurrentScreen === "ChatRoom") {
            AssetTypePublish(C, Item);
        } else {
            DialogFocusItem = null;
            if (C.ID != 0) {
                C.CurrentDialog = DialogFind(C, Item.TypeInfo.Types[NewType || Item.TypeInfo.NoneTypeName].DialogNpc + NewType || Item.TypeInfo.NoneTypeName, "ItemArms");
                C.FocusGroup = null;
            }
        }
    
    } else {
        CharacterRefresh(C, false)
    }

}

/**
 * 
 * @param {Character} C 
 * @param {Item} Item 
 */
function AssetTypePublish(C, Item) {
    const Info = Item.Asset.TypeInfo;
    const Dictionary = [
        { Tag: "AssetTypeInfo", Group: Item.Asset.Group.Name, Asset: Item.Asset.Name, Type: InventoryItemGetType(Item) },
        { Tag: "SourceCharacter", Text: Player.Name, MemberNumber: Player.MemberNumber },
        { Tag: "TargetCharacter", Text: C.Name, MemberNumber: C.MemberNumber },
        { Tag: "DestinationCharacter", Text: C.Name, MemberNumber: C.MemberNumber }];
    ChatRoomPublishCustomAction("AssetTypeSet", true, Dictionary.concat(Info.DynamicDictionary(C, Item)));
}

/**
 * 
 * @param {Character} C 
 * @param {Item} Item 
 * @param {string} NewType 
 */
function AssetTypePreSet(C, Item, NewType) {
    AssetTypeSetLoad(Item);
    Item.Property.Type = NewType;
    AssetTypeSetMofifiers(Item, NewType);
    DialogFocusItem = null;
    DialogProgressStart(C, InventoryGet(C, Item ? Item.Asset.Group.Name : C.FocusGroup.Name), Item);
}

/**
 * 
 * @param {Item} Item 
 * @param {?string} NewType 
 */
function AssetTypeSetMofifiers(Item, NewType) {
    // if (NewType && NewType[0] == '_') Item.Property.Restrain = NewType[0].substr(1);
    // else if (Info.Restrain) Item.Property.Restrain = NewType[0];
    const Info = Item.Asset.TypeInfo;
    if (NewType == null) NewType = Info.NoneTypeName;
    const Type = Info.Types[NewType];
    AssetTypeControlledProperties.forEach(P => {
        if (Type.Property && Type.Property[P] !== undefined) {
            Item.Property[P] = Type.Property[P];
        } else {
            delete Item.Property[P];
        }
    });
    if (Item.Asset.AllowLock && Item.Property.LockedBy && Item.Property.LockedBy != "") {
        if (Item.Property.Effect) Item.Property.Effect.push("Lock");
        else Item.Property.Effect = ["Lock"];
    }
    if (Item.Property.Effect && Item.Property.Effect.includes("Egged") && Item.Property.Intensity > 0) {
        Item.Property.Effect.push("Vibrating");
    }
}

/**
 * Finds a dialog for a typed item
 * @param {string} msg 
 * @param {Array} Dictionary 
 */
function AssetTypeDialogFind(msg, Dictionary) {
    if (!Array.isArray(Dictionary)) return "";
    const Info = Dictionary.find(D => D.Tag == "AssetTypeInfo");
    if (!Info) return "";
    return AssetTypeGetDialog(msg.replace("AssetType", ""), Info);
}

/**
 * 
 * @param {Character} C 
 * @param {Asset} Asset 
 * @param {string} Type 
 */
function AssetTypeGetDescription(C, Asset, Type) {
    // MAYBE: find the item on C and get the type if it is null
    if (Asset.TypeInfo && Asset.TypeInfo.TypedName) {
        const D = AssetTypeGetDialog("Name", { Asset: Asset.Name, Group: Asset.Group.Name, Type: Type });
        if (D) return D;
    }
    return Asset.DynamicDescription(C); // Can be removed after the
}

/**
 * 
 * @param {TypeInfoType} Type 
 * @param {boolean} Self 
 */
function AssetTypeSkillCheck(Type, Self) {
    const Skills = Type.Skills;
    if (!Skills) return null;
    for (let key in Skills) {
        if (key == "Bondage" && Self) key = "Self" + key;
        if (Skills[key] && SkillGetLevelReal(Player, key) < Skills[key]) return { Skill: key, Level: Skills[key] };
    }
    return null;
}
