"use strict"

/* TODO
 *
 * Expression
 *
 */

 /** Type selection before item add */
var AssetTypeSelectBefore = false;

/**
 * @type {string[]}
 */
const AssetTypeControlledProperties = ["Effect", "Block", "SetPose", "Difficulty", "SelfUnlock", "Hide"];
var AssetTypeDialog = {};
/** @type AssetTypeDraw */
let AssetTypeDrawType = AssetTypeDrawTypeWithImage;
/** @type AssetTypeClick */
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

/** The X & Y co-ordinates of each option's button, based on the number to be displayed per page. */
const AssetTypeXYWithoutImages = [
    [], //0 placeholder
    [[1400, 450]], //1 option per page
    [[1175, 450], [1425, 450]], //2 options per page
    [[1175, 450], [1425, 450], [1675, 450]], //3 options per page
    [[1175, 450], [1425, 450], [1175, 525], [1425, 525]], //4 options per page
    [[1175, 450], [1425, 450], [1675, 450], [1175, 525], [1425, 525]], //5 options per page
    [[1175, 450], [1425, 450], [1675, 450], [1175, 525], [1425, 525], [1675, 525]], //6 options per page
    [[1050, 450], [1200, 450], [1450, 450], [1700, 450], [1050, 525], [1200, 525], [1425, 525]], //7 options per page
    [[1050, 450], [1200, 450], [1450, 450], [1700, 450], [1050, 525], [1200, 525], [1425, 525], [1675, 525]], //8 options per page
];

/**
 * Loads the type info
 */
function AssetTypeLoad() {
    // Tools_AssetTypeInfoPreload();
    // let Tools_Count = 0;

    Asset.forEach(A => {
        A.ExtendedOrTypeInfo = A.Extended;

        const Group = AssetTypeInfo[A.Group.Name.replace(/[23]/g, "")]
        if (Group == null) return;
        let Info = Group[A.Name];
        if (Info == null) return;

        if (Array.isArray(Info.Types)) Info.Types = Info.Types.reduce((acc, value) => { acc[value] = {}; return acc; }, {});

        if (Info.DynamicDictionary == null) { Info.DynamicDictionary = function () { return []; }; Info.DynamicDictionary.Default = true; }
        if (Info.DynamicAllowType == null) { Info.DynamicAllowType = function () { return A.AllowType; }; Info.DynamicAllowType.Default = true; }
        if (Info.DynamicAllowSetType == null) { Info.DynamicAllowSetType = function () { return true; }; Info.DynamicAllowSetType.Default = true;}

        if (A.Extended && Info.Unextend) A.Extended = false;

        A.TypeInfo = Info;
        A.ExtendedOrTypeInfo = true;
        A.AllowType = Object.keys(Info.Types).map(T => T == Info.NoneTypeName ? null : T);

        // Tools_Count++;
    });
    AssetTypeLoadDialog();

    // Tools_AssetTypeReport(Tools_Count);
}

/**
 * Loads the dialogs from the csv for asset types
 */
async function AssetTypeLoadDialog() {
    const Data = await fetch("Assets/Female3DCG/Female3DCG_Type.csv").then(r => r.text());
    const CSV = CommonParseCSV(Data);
    CSV.forEach(value => {
        const [G, A, K, T, D] = value;
        if (!AssetTypeDialog[G]) AssetTypeDialog[G] = {};
        if (!AssetTypeDialog[G][A]) AssetTypeDialog[G][A] = {};
        if (!AssetTypeDialog[G][A]) AssetTypeDialog[G][A] = {};
        if (!AssetTypeDialog[G][A][K]) AssetTypeDialog[G][A][K] = {};
        AssetTypeDialog[G][A][K][T || "Default"] = D;
    });
    await AssetTypeDialogTranslate();
}

/**
 * Translates the Dialogs for the Asset Types
 */
async function AssetTypeDialogTranslate() {
    if (TranslationLanguage == "EN") return;
    const Data = TranslationParseTXT(await fetch(`Assets/Female3DCG/Female3DCG_Type_${TranslationLanguage}.txt`).then(status).then(r => r.text()));
    for (let Group in AssetTypeDialog)
        for (let Asset in AssetTypeDialog[Group])
            for (let Key in AssetTypeDialog[Group][Asset])
                for (let Dialog in AssetTypeDialog[Group][Asset][Key])
                    AssetTypeDialog[Group][Asset][Key][Dialog] = TranslationString(AssetTypeDialog[Group][Asset][Key][Dialog], Data);
}

/**
 * Prepares the UI for the item
 * @param {Item} [Item=DialogFocusItem] - Item to load
 * @returns {void} - Nothing
 */
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
    DialogExtendedMessage = AssetTypeDialog[Item.Asset.Group.Name.replace(/[23]/g, "")][Item.Asset.Name]["Select"]["Default"];
    ExtendedItemPermissionMode = false;

    if (Item.Asset.TypeInfo.DrawType == "Images") {
        AssetTypeDrawType = AssetTypeDrawTypeWithImage;
        AssetTypeClickType = AssetTypeClickTypeWithImage;
    } else if (Item.Asset.TypeInfo.DrawType == "TextOnly") {
        AssetTypeDrawType = AssetTypeDrawTypeWithoutImage;
        AssetTypeClickType = AssetTypeClickTypeWithoutImage;
    }
}

/**
 * Draw handler for FocusItem with TypeInfo
 */
function AssetTypeSetDraw() {
    if (DialogFocusItem == null || DialogFocusItem.Asset.TypeInfo == null) return;

    const C = CharacterGetCurrent();
    const Asset = DialogFocusItem.Asset;
    const Info = Asset.TypeInfo;
    const Types = Info.DynamicAllowType(DialogFocusItem);
    const Offset = ExtendedItemGetOffset();
    const ShowCount = Info.ShowCount > 8 ? Info.ShowCount : Math.min(Info.ShowCount, Types.length);
    const Description = AssetTypeDialog[Asset.Group.Name.replace(/[23]/g, "")][Asset.Name];

    if (Offset >= ShowCount) {
        DrawButton(1665, 25, 90, 90, "", "White", "Icons/Prev.png");
    }
    if (Types.length > ShowCount && Offset < ShowCount * Math.floor(Types.length / ShowCount)) {
        DrawButton(1775, 25, 90, 90, "", "White", "Icons/Next.png");
    }
    if (!AssetTypeSelectBefore && Asset.AllowLock) {
        const IsGroupBlocked = InventoryGroupIsBlocked(C);
        const Prerequisite = InventoryAllow(C, DialogFocusItem.Asset.Prerequisite);
        if (InventoryItemHasEffect(DialogFocusItem, "Lock", true)) {
            let unlock = false;
            if (((C.ID != 0) || Player.CanInteract()) && Prerequisite && !IsGroupBlocked && DialogCanUnlock(C, DialogFocusItem)) { unlock = true; DrawButton(1015, 25, 90, 90, "", "White", "Icons/Unlock.png"); }
            if (!Player.IsBlind() && DialogFocusItem.Property && DialogFocusItem.Property.LockedBy) DrawButton(unlock ? 1125 : 1015, 25, 90, 90, "", "White", "Icons/InspectLock.png");
        } else if (Player.CanInteract() && Prerequisite && !IsGroupBlocked) {
            DrawButton(1015, 25, 90, 90, "", "White", "Icons/Lock.png");
        }
    }

    // Draw the header and item
    DrawRect(1387, 55, 225, 275, "white");
    DrawImageResize("Assets/" + Asset.Group.Family + "/" + Asset.Group.Name + "/Preview/" + Asset.Name + ".png", 1389, 57, 221, 221);
    // TODO Dynamic Description
    DrawTextFit(Asset.Description, 1500, 310, 221, "black");
    DrawText(DialogExtendedMessage, 1500, 375, "white", "gray");

    if (!Info.TypeLocking || !InventoryItemHasEffect(DialogFocusItem, "Lock", true)) {
        // Draw the possible variants and their requirements, arranged based on the number per page
        for (let I = Offset; (I < Types.length) && ((ShowCount == 0) || (I < ShowCount + Offset)); I++) {
            AssetTypeDrawType(C, Asset, Info, Types, ShowCount, Description["Name"], Offset, I);
        }
    } else {
        DrawText(Description["TypeLocked"]["Default"], 1500, 500, "white", "gray");
    }

    if (C.ID == 0) DrawButton(1775, 25, 90, 90, "", "White", ExtendedItemPermissionMode ? "Icons/DialogNormalMode.png" : "Icons/DialogPermissionMode.png", DialogFind(Player, ExtendedItemPermissionMode ? "DialogNormalMode" : "DialogPermissionMode"));
}

/**
 * Gets the color for the Type button
 * @param {Character} C - Current Character
 * @param {Asset} Asset - asset
 * @param {string|null} Type - type of the asset
 * @param {boolean} IsSelected - Type is selected
 * @param {boolean} Hover - Mouse is over the button
 */
function AssetTypeGetDrawColor(C, Asset, Type, IsSelected, Hover) {
    const SkillCheck = !!AssetTypeSkillCheck(Asset.TypeInfo, Type, C.ID == 0);
    if (ExtendedItemPermissionMode && C.ID == 0) {
        const Blocked = InventoryIsPermissionBlocked(C, Asset.DynamicName(Player), Asset.DynamicGroupName, Type);
        const Limited = InventoryIsPermissionLimited(C, Asset.Name, Asset.Group.Name, Type);
        return (IsSelected || !Type) ? "#888888" : Blocked ? (Hover ? "Red" : "Pink") : Limited ? (Hover ? "Orange" : "#FED8B1") : (Hover ? "Green" : "Lime");
    }
    const Blocked = InventoryIsPermissionBlocked(C, Asset.DynamicName(Player), Asset.DynamicGroupName, Type);
    const Limited = !InventoryIsPermissionLimited(C, Asset.Name, Asset.Group.Name, Type);
    return IsSelected ? "#888888" : (Blocked || Limited) ? "Red" : SkillCheck ? "Pink" : (Hover ? "Cyan" : "White");
}

/**
 * @type AssetTypeDraw
 */
function AssetTypeDrawTypeWithImage(C, Asset, Info, Types, ShowCount, Description, Offset, I) {
    const X = AssetTypeXY[ShowCount][I - Offset][0];
    const Y = AssetTypeXY[ShowCount][I - Offset][1];
    const Hover = (MouseX >= X) && (MouseX < X + 225) && (MouseY >= Y) && (MouseY < Y + 275) && !CommonIsMobile;
    const Type = Types[I] || Info.NoneTypeName;
    const IsSelected = !AssetTypeSelectBefore && InventoryItemIsType(DialogFocusItem, Types[I]);
    const Color = AssetTypeGetDrawColor(C, Asset, Types[I], IsSelected, Hover);
    DrawButton(X, Y, 225, 275, "", Color, null, null, IsSelected);
    DrawImage("Screens/Inventory/" + Asset.Group.Name + "/" + Asset.Name + "/" + Type + ".png", X - 1, Y - 1);
    DrawTextFit(Description[Type], X + 112, Y + 250, 225, "black");
}

/**
 * @type AssetTypeDraw
 */
function AssetTypeDrawTypeWithoutImage(C, _, Info, Types, ShowCount, Description, Offset, I) {
    const X = AssetTypeXYWithoutImages[ShowCount][I - Offset][0];
    const Y = AssetTypeXYWithoutImages[ShowCount][I - Offset][1];
    const Hover = (MouseX >= X) && (MouseX < X + 225) && (MouseY >= Y) && (MouseY < Y + 55) && !CommonIsMobile;
    const Type = Types[I] || Info.NoneTypeName;
    const IsSelected = !AssetTypeSelectBefore && InventoryItemIsType(DialogFocusItem, Types[I]);
    const Color = AssetTypeGetDrawColor(C, Asset, Types[I], IsSelected, Hover);
    DrawButton(X, Y, 225, 55, "", Color, null, null, IsSelected);
    DrawTextFit(Description[Type], X + 112, Y + 30, 225, "black");
}

/**
 * Click handler for FocusItem with TypeInfo
 */
function AssetTypeSetClick() {
    if (DialogFocusItem == null || DialogFocusItem.Asset.TypeInfo == null) return;

    // Exit button
    if (MouseIn(1885, 25, 90, 85)) {
        DialogFocusItem = null;
        if (ExtendedItemPermissionMode && CurrentScreen == "ChatRoom") ChatRoomCharacterUpdate(Player);
        ExtendedItemPermissionMode = false;
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
        return;
    }
    if (MouseIn(1775, 25, 90, 90) && Types.length > ShowCount && Offset < ShowCount * Math.floor(Types.length / ShowCount)) {
        ExtendedItemSetOffset(Offset + ShowCount);
        return;
    }

    // Permission toggle button
	if (MouseIn(1775, 25, 90, 90) && C.ID == 0) {
		if (ExtendedItemPermissionMode && CurrentScreen == "ChatRoom") ChatRoomCharacterUpdate(Player);
		ExtendedItemPermissionMode = !ExtendedItemPermissionMode;
	}

    if (!AssetTypeSelectBefore && Asset.AllowLock && MouseIn(1015, 25, 190, 90)) {
        const Item = DialogFocusItem;
        const IsGroupBlocked = InventoryGroupIsBlocked(C);
        const Prerequisite = InventoryAllow(C, Item.Asset.Prerequisite);
        if (InventoryItemHasEffect(Item, "Lock", true)) {
            let unlock = false;
            if (((C.ID != 0) || Player.CanInteract()) && Prerequisite && !IsGroupBlocked && DialogCanUnlock(C, Item)) { unlock = true; if (MouseIn(1015, 25, 90, 90)) { DialogDialogMenuButtonClickUnlock(C, Item); return; } }
            if (!Player.IsBlind() && Item.Property && Item.Property.LockedBy) { if (MouseIn(unlock ? 1125 : 1015, 25, 90, 90)) { DialogDialogMenuButtonClickInspectLock(Item); return; } }
        } else if (Player.CanInteract() && Prerequisite && !IsGroupBlocked) {
            if (MouseIn(1015, 25, 90, 90)) {
                DialogFocusItem = null;
                DialogDialogMenuButtonClickLock(C, Item);
                return;
            }
        }
    }

    if (!Info.TypeLocking || !InventoryItemHasEffect(DialogFocusItem, "Lock", true)) {
        for (let I = Offset; (I < Types.length) && ((ShowCount == 0) || (I < ShowCount + Offset)); I++) {
            if (AssetTypeClickType(C, Info, Types, ShowCount, Offset, I)) return;
        }
    }
}

/**
 * @type AssetTypeClick
 */
function AssetTypeClickTypeWithImage(C, Info, Types, ShowCount, Offset, I) {
    const X = AssetTypeXY[ShowCount][I - Offset][0];
    const Y = AssetTypeXY[ShowCount][I - Offset][1];
    if (MouseIn(X, Y, 225, 275) && (AssetTypeSelectBefore || !InventoryItemIsType(DialogFocusItem, Types[I]))) {
        AssetTypeClicked(C, Info, Types[I]);
        return true;
    }
    return false;
}

/**
 * @type AssetTypeClick
 */
function AssetTypeClickTypeWithoutImage(C, Info, Types, ShowCount, Offset, I) {
    const X = AssetTypeXYWithoutImages[ShowCount][I - Offset][0];
    const Y = AssetTypeXYWithoutImages[ShowCount][I - Offset][1];
    if (MouseIn(X, Y, 225, 55) && (AssetTypeSelectBefore || !InventoryItemIsType(DialogFocusItem, Types[I]))) {
        AssetTypeClicked(C, Info, Types[I]);
        return true;
    }
    return false;
}

/**
 * Checks the Skill/Prerequisite/DynamicAllowSetType then sets the type on the DialogFocusItem
 * @param {Character} C - Current character
 * @param {TypeInfo} Info - Type info
 * @param {string|null} TypeName - Name of the type
 * @returns {void} - Nothing
 */
function AssetTypeClicked(C, Info, TypeName) {

    if (InventoryItemIsType(DialogFocusItem, TypeName)) return;

    if (ExtendedItemPermissionMode && C.ID == 0) {
        if (!TypeName) return;
        InventoryTogglePermission(DialogFocusItem, TypeName);
        return;
    }

    const Blocked = InventoryIsPermissionBlocked(C, DialogFocusItem.Asset.DynamicName(Player), DialogFocusItem.Asset.DynamicGroupName, TypeName);
    const Limited = !InventoryCheckLimitedPermission(C, DialogFocusItem, TypeName);
    if (Blocked || Limited) return;

    const SkillCheck = AssetTypeSkillCheck(Info, TypeName, C.ID == 0);
    if (SkillCheck) {
        DialogExtendedMessage = DialogFind(Player, "Require" + SkillCheck.Skill + "Level").replace("ReqLevel", SkillCheck.Level);
        return;
    }

    const Type = Info.Types[TypeName || Info.NoneTypeName];
    if (Type.Prerequisite && !InventoryAllow(C, Type.Prerequisite, true)) {
        DialogExtendedMessage = DialogText;
        return;
    }
    if (!Info.DynamicAllowSetType(C, DialogFocusItem, Type))
        return;
    if (AssetTypeSelectBefore) {
        AssetTypeSelectBefore = false;
        AssetTypePreSet(C, DialogFocusItem, TypeName);
    } else {
        AssetTypeSet(C, DialogFocusItem, TypeName);
    }
    if (DialogInventory != null) {
        DialogFocusItem = null;
        if (C.FocusGroup) DialogMenuButtonBuild(C);
    }
}

/**
 * Sets the item type on a character
 * @param {Character} C - Current character
 * @param {Item} Item
 * @param {string} NewType
 */
function AssetTypeSet(C, Item, NewType) {
    if (CurrentScreen == "ChatRoom") {
        Item = InventoryGet(C, Item ? Item.Asset.Group.Name : C.FocusGroup.Name);
        if (Item.Asset.Extended) window["Inventory" + Item.Asset.Group.Name + Item.Asset.Name + "Load"]();
    }

    const OldType = InventoryItemGetType(Item);
    if (Item.Property) Item.Property.Type = NewType;
    else Item.Property = { Type: NewType };

    AssetTypeSetMofifiers(Item, NewType);

    if (Item.Asset.Group.Category == "Item") {
        if (CurrentScreen === "ChatRoom") {
            ChatRoomCharacterUpdate(C);
            AssetTypePublish(C, Item, OldType);
        } else {
            CharacterRefresh(C);
            DialogFocusItem = null;
            if (C.ID != 0) {
                C.CurrentDialog = DialogFind(C, Item.Asset.TypeInfo.Types[NewType || Item.Asset.TypeInfo.NoneTypeName].DialogNpc + NewType || Item.Asset.TypeInfo.NoneTypeName, "ItemArms");
                C.FocusGroup = null;
            }
        }

    } else {
        CharacterRefresh(C, false)
    }
}

/**
 * Publish a Type change to the chat room
 * @param {Character} C - Current Character
 * @param {Item} Item -
 * @param {string} OldType - Previous type of the item
 * @returns {void} - Nothing
 */
function AssetTypePublish(C, Item, OldType) {
    const Info = Item.Asset.TypeInfo;
    const Dictionary = [
        { Tag: "AssetTypeInfo", Group: Item.Asset.Group.Name, Asset: Item.Asset.Name, Type: InventoryItemGetType(Item) },
        { Tag: "SourceCharacter", Text: Player.Name, MemberNumber: Player.MemberNumber },
        { Tag: "TargetCharacter", Text: C.Name, MemberNumber: C.MemberNumber },
        { Tag: "DestinationCharacter", Text: C.Name, MemberNumber: C.MemberNumber }];
    ChatRoomPublishCustomAction("AssetTypeSet", true, Dictionary.concat(Info.DynamicDictionary(C, Item, OldType)));
}

/**
 * Sets a type on an item that has yet to be added
 * @param {Character} C - Current character
 * @param {Item} Item - Item to set
 * @param {string} NewType - New type
 * @returns {void} - Nothing
 */
function AssetTypePreSet(C, Item, NewType) {
    AssetTypeSetLoad(Item);
    Item.Property.Type = NewType;
    AssetTypeSetMofifiers(Item, NewType);
    DialogFocusItem = null;
    DialogProgressStart(C, InventoryGet(C, Item ? Item.Asset.Group.Name : C.FocusGroup.Name), Item);
}

/**
 * Sets the modifiers on an Item based on TypeInfo
 * @param {Item} Item - Item to work with
 * @param {?string} NewType - New Type for the item
 * @returns {void} - Nothing
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
 * Finds a dialog from AssetTypeDialog
 * @param {"Name"|"Set"|"Select"} key - Key for the Dialog
 * @param {Object} obj
 * @param {string} obj.Group - Group name
 * @param {string} obj.Asset - Asset name
 * @param {string} obj.Type  - Type name
 * @returns {string} - Dialog
 */
function AssetTypeGetDialog(key, obj) {
    const { Group, Asset, Type } = obj;
    return CommonObjectTraverse(AssetTypeDialog, Group, Asset, key, Type) || "";
}

/**
 * Finds a dialog for a typed item
 * @param {string} msg
 * @param {Array} Dictionary
 * @returns {string} - Dialog
 */
function AssetTypeDialogFind(msg, Dictionary) {
    if (!Array.isArray(Dictionary)) return "";
    const Info = Dictionary.find(D => D.Tag == "AssetTypeInfo");
    if (!Info) return "";
    return AssetTypeGetDialog(msg.replace("AssetType", ""), Info);
}

/**
 * Gets the Asset dynamic description
 * @param {Character} C - Character the assets is on
 * @param {Asset} Asset - The asset
 * @param {string|null} Type - Type of the asset
 * @returns {string} - Description of the asset
 */
function AssetTypeGetDescription(C, Asset, Type) {
    // MAYBE: find the item on C and get the type if it is null
    if (Asset.TypeInfo && Asset.TypeInfo.TypedName) {
        const D = AssetTypeGetDialog("Name", { Asset: Asset.Name, Group: Asset.Group.Name.replace(/[23]/g, ""), Type: Type || Asset.TypeInfo.NoneTypeName });
        if (D) return D;
    }
    return Asset.DynamicDescription(C); // Can be removed after all items are added
}

/**
 * Checks the skill requirements on a type
 * @param {TypeInfo} Info - Type info
 * @param {string|null} Type - Type name
 * @param {boolean} Self - the character is the player
 * @returns {{Skill: string, Level: number}|null} - Missing skill or null
 */
function AssetTypeSkillCheck(Info, Type, Self) {
    const Skills = Info.Types[Type || Info.NoneTypeName].Skills;
    if (!Skills) return null;
    for (let key in Skills) {
        if (key == "Bondage" && Self) key = "Self" + key;
        if (Skills[key] && SkillGetLevelReal(Player, key) < Skills[key]) return { Skill: key, Level: Skills[key] };
    }
    return null;
}


/**
 * @callback AssetTypeDraw
 * @param {Character} C
 * @param {Asset} Asset
 * @param {TypeInfo} Info
 * @param {string[]} Types
 * @param {number} ShowCount
 * @param {Object<string, string>} Description
 * @param {number} Offset
 * @param {number} I
 * @returns {void} - Nothing
 */

/**
 * @callback AssetTypeClick
 * @param {Character} C
 * @param {TypeInfo} Info
 * @param {string[]} Types
 * @param {number} ShowCount
 * @param {number} Offset
 * @param {number} I
 * @returns {boolean}
 */

 /**
 * @typedef {Object} TypeInfo
 * @property {Object<string, TypeInfoType>|string[]} Types
 */

/**
 * @typedef {Object} TypeInfoType
 * @property {Property} Property
 * @property {Object<string, number>} Skills
 */
