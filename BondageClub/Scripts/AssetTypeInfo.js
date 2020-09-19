"use strict"

var AssetTypeInfo = {
    ItemArms: {
        BitchSuit: Tools_AssetTypeTransform("ItemArmsBitchSuit", "BitchSuitType", "SelectBitchSuitType", "BitchSuitSet", "BitchSuitType"),
        Chains: Tools_AssetTypeTransform("ItemArmsChains", "ChainBondage", "SelectChainBondage", "ArmsChainSet", "ChainBondage"),
        DuctTape: Tools_AssetTypeTransform("ItemArmsDuctTape", "DuctTapePose", "SelectTapeWrapping", "DuctTapeRestrain", "ItemArmsDuctTape"),
        HempRope: Tools_AssetTypeTransform("ItemArmsHempRope", "RopeBondage", "SelectRopeBondage", "ArmsRopeSet", "RopeBondage"),
        LatexButterflyLeotard: Tools_AssetTypeTransform("ItemArmsLatexButterflyLeotard", "ItemArmsLatexLeotard", "ItemArmsLatexLeotardSelect", "ItemArmsLatexLeotardSet", "ItemArmsLatexButterflyLeotard"),
        LeatherArmbinder: Tools_AssetTypeTransform("ItemArmsLeatherArmbinder", "LeatherArmbinderType", "SelectStrapType", "LeatherArmbinderSet", "LeatherArmbinderSet"),
        LeatherCuffs: Tools_AssetTypeTransform("ItemArmsLeatherCuffs", "LeatherCuffsPose", "SelectBondagePosition", "LeatherCuffsRestrain", "ItemArmsLeatherCuffs"),
        LeatherStraitJacket: Tools_AssetTypeTransform("ItemArmsLeatherStraitJacket", "LeatherStraitJacketPose", "LeatherStraitJacketSelectTightness", "LeatherStraitJacketRestrain", "LeatherStraitJacketNPCReaction"),
        MermaidSuit: Tools_AssetTypeTransform("ItemArmsMermaidSuit", "MermaidSuitType", "MermaidSuitSelect", "MermaidSuitSet", "MermaidSuitNPCReaction"),
        OrnateCuffs: Tools_AssetTypeTransform("ItemArmsOrnateCuffs", "OrnateCuffsPose", "SelectBondagePosition", "OrnateCuffsRestrain", "ItemArmsOrnateCuffsNPCReaction"),
        StraitJacket: Tools_AssetTypeTransform("ItemArmsStraitJacket", "StraitJacketPose", "StraitJacketSelectTightness", "StraitJacketRestrain", "ItemArmStraitJacketNPCReaction"),
        SturdyLeatherBelts: Tools_AssetTypeTransform("ItemArmsSturdyLeatherBelts", "SturdyLeatherBeltsPose", "SturdyLeatherBeltsSelectTightness", "SturdyLeatherBeltsRestrain", "ItemArmsSturdyLeatherBelts"),
        TightJacket: Tools_AssetTypeTransform("ItemArmsTightJacket", "JacketPrep", "SelectJacketPrep", "JacketPrepSet", "JacketPrep"),
        TightJacketCrotch: Tools_AssetTypeTransform("ItemArmsTightJacketCrotch", "JacketPrep", "SelectJacketPrep", "JacketPrepSet", "JacketPrep"),
        Web: Tools_AssetTypeTransform("ItemArmsWeb", "WebBondage", "WebBondageSelect", "ArmsWebSet", "ItemArmsWeb"), // TODO Action
        WristShackles: Tools_AssetTypeTransform("ItemArmsWristShackles", "WristShacklesPose", "SelectBondagePosition", "WristShacklesRestrain", "ItemArmsWristShackles"),
        Zipties: Tools_AssetTypeTransform("ItemArmsZipties", "ZipBondage", "SelectZipTie", "ZipArmsSet", "Zip"),
    },
    ItemDevices: {
        Locker: Tools_AssetTypeTransform("ItemDevicesLocker", "LockerState", "SelectLockerState", "DevicesLockerSet", "ItemBootsToeTapeNPCReaction"),
        SmallLocker: Tools_AssetTypeTransform("ItemDevicesSmallLocker", "LockerState", "SelectLockerState", "DevicesLockerSet", "ItemBootsToeTapeNPCReaction"),
        VentlessLocker: Tools_AssetTypeTransform("ItemDevicesVentlessLocker", "LockerState", "SelectLockerState", "DevicesLockerSet", "ItemBootsToeTapeNPCReaction"),
        SmallVentlessLocker: Tools_AssetTypeTransform("ItemDevicesSmallVentlessLocker", "LockerState", "SelectLockerState", "DevicesLockerSet", "ItemBootsToeTapeNPCReaction"),
        Crib: Tools_AssetTypeTransform("ItemDevicesCrib", "Crib", "SelectCribState", "CribSet", "ItemBootsToeTapeNPCReaction"),
    },
    ItemFeet: {
        HempRope: Tools_AssetTypeTransform("ItemFeetHempRope", "RopeBondage", "SelectRopeBondage", "LegRopeSet", "ItemBootsToeTapeNPCReaction"),
        Zipties: Tools_AssetTypeTransform("ItemFeetZipties", "ZipBondage", "SelectZipTie", "ZipFeetSet", "ItemBootsToeTapeNPCReaction"),
    },
    ItemHead: {
        DuctTape: Tools_AssetTypeTransform("ItemHeadDuctTape", "DuctTapeHeadType", "SelectBlindType", "DuctTapeHeadSet", "ItemBootsToeTapeNPCReaction"),
        WebBlindfold: Tools_AssetTypeTransform("ItemHeadWebBlindfold", "WebBondage", "WebBondageSelect", "HeadWebSet", "ItemBootsToeTapeNPCReaction"),
    },
    ItemLegs: {
        HempRope: Tools_AssetTypeTransform("ItemLegsHempRope", "RopeBondage", "SelectRopeBondage", "LegRopeSet", "ItemBootsToeTapeNPCReaction"),
        DuctTape: Tools_AssetTypeTransform("ItemLegsDuctTape", "DuctTapePose", "SelectTapeWrapping", "DuctTapeRestrain", "ItemBootsToeTapeNPCReaction"),
        SturdyLeatherBelts: Tools_AssetTypeTransform("ItemLegsSturdyLeatherBelts", "SturdyLeatherBeltsPose", "SturdyLeatherBeltsSelectTightness", "SturdyLeatherBeltsRestrain", "ItemBootsToeTapeNPCReaction"),
        Zipties: Tools_AssetTypeTransform("ItemLegsZipties", "ZipBondage", "SelectZipTie", "ZipLegsSet", "ItemBootsToeTapeNPCReaction"),
    },
    ItemMouth: {
        ClothGag: Tools_AssetTypeTransform("ItemMouthClothGag", "ClothGagType", "SelectGagType", "ClothGagSet", "ClothGag"),
        DildoPlug: Tools_AssetTypeTransform("ItemMouthDildoPlugGag", "PlugGagMouthType", "SelectGagType", "DildoPlugGagMouthSet", "ItemMouthDildoPlugGag"),
        MilkBottle: Tools_AssetTypeTransform("ItemMouthMilkBottle", "MilkBottle", "SelectMilkBottleState", "MilkBottleSet", "MilkBottle"),
        PlugGag: Tools_AssetTypeTransform("ItemMouthPlugGag", "PlugGagMouthType", "SelectGagType", "PlugGagMouthSet", "ItemMouthPlugGag"),
    },
}
