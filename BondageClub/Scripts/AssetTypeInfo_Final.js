"use strict"

var AssetTypeInfo = {
	ItemArms: {
		BitchSuit: {
			NoneTypeName: "Latex", DrawType: "Images", ShowCount: 2, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "BitchSuitType",
			Types: {
				Latex: {
					Property: { Block: ["ItemBreast", "ItemNipples", "ItemNipplesPiercings", "ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
				},
				UnZip: {
					Property: { Block: [] },
				},
			},
		},
		Chains: {
			NoneTypeName: "BoxTie", DrawType: "Images", ShowCount: 8, Unextend: true, TypeLocking: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ChainBondage",
			Types: {
				BoxTie: {
					Property: { Difficulty: 1, Effect: ["Block", "Prone"], SetPose: ["BackBoxTie"] },
				},
				WristTie: {
					Property: { Difficulty: 1, Effect: ["Block", "Prone"], SetPose: ["BackBoxTie"] },
					Expression: [{ Group: "Blush", Name: "Low", Timer: 5 }],
				},
				ChainCuffs: {
					Property: { Difficulty: 1, Effect: ["Block", "Prone"], OverridePriority: 29, SetPose: ["BackCuffs"] },
					Expression: [{ Group: "Blush", Name: "Low", Timer: 5 }],
				},
				WristElbowTie: {
					Property: { Difficulty: 2, Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"] },
					Skills: { Bondage: 2 },
					Expression: [{ Group: "Blush", Name: "Medium", Timer: 5 }],
				},
				WristElbowHarnessTie: {
					Property: { Difficulty: 3, Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"] },
					Skills: { Bondage: 3 },
					Expression: [{ Group: "Blush", Name: "Medium", Timer: 5 }],
				},
				KneelingHogtie: {
					Property: { Block: ["ItemHands", "ItemLegs", "ItemFeet", "ItemBoots", "ItemDevices"], Difficulty: 3, Effect: ["Block", "Freeze", "Prone"], SetPose: ["Kneel", "BackElbowTouch"] },
					Skills: { Bondage: 4 },
					Prerequisite: ["NotMounted", "NotSuspended"],
					Expression: [{ Group: "Blush", Name: "Medium", Timer: 10 }],
				},
				Hogtied: {
					Property: { Block: ["ItemHands", "ItemLegs", "ItemFeet", "ItemBoots", "ItemDevices"], Difficulty: 3, Effect: ["Block", "Freeze", "Prone"], SetPose: ["Hogtied"] },
					Skills: { Bondage: 4 },
					Prerequisite: ["NotMounted", "NotSuspended", "CannotBeHogtiedWithAlphaHood"],
					Expression: [{ Group: "Blush", Name: "Medium", Timer: 10 }],
				},
				AllFours: {
					Property: { Block: ["ItemLegs", "ItemFeet", "ItemBoots", "ItemDevices"], Difficulty: 3, Effect: ["ForceKneel"], SetPose: ["AllFours"] },
					Skills: { Bondage: 6 },
					Prerequisite: ["NotMounted", "NotSuspended", "CannotBeHogtiedWithAlphaHood"],
					Expression: [{ Group: "Blush", Name: "Medium", Timer: 10 }],
				},
				SuspensionHogtied: {
					Property: { Block: ["ItemHands", "ItemLegs", "ItemFeet", "ItemBoots"], Difficulty: 6, Effect: ["Block", "Freeze", "Prone"], SetPose: ["Hogtied", "SuspensionHogtied"] },
					Skills: { Bondage: 8 },
					Prerequisite: ["NotMounted", "NotChained", "NotSuspended", "CannotBeHogtiedWithAlphaHood"],
					Expression: [{ Group: "Blush", Name: "Medium", Timer: 10 }],
				},
			},
		},
		DuctTape: {
			NoneTypeName: "Arms", DrawType: "Images", ShowCount: 5, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemArmsDuctTape",
			Types: {
				Arms: {
					Property: { Difficulty: 1 },
				},
				Bottom: {
					Property: { Block: ["ItemVulva", "ItemButt", "ItemPelvis", "ItemVulvaPiercings"], Difficulty: 2, SetPose: ["BackElbowTouch"] },
					Skills: { SelfBondage: 4 },
				},
				Top: {
					Property: { Block: ["ItemTorso", "ItemBreast", "ItemNipples", "ItemNipplesPiercings"], Difficulty: 4, SetPose: ["BackElbowTouch"] },
				},
				Full: {
					Property: { Block: ["ItemVulva", "ItemButt", "ItemPelvis", "ItemTorso", "ItemBreast", "ItemNipples", "ItemVulvaPiercings", "ItemNipplesPiercings"], Difficulty: 6, SetPose: ["BackElbowTouch"] },
				},
				Complete: {
					Property: { Block: ["ItemVulva", "ItemButt", "ItemPelvis", "ItemTorso", "ItemBreast", "ItemNipples", "ItemVulvaPiercings", "ItemNipplesPiercings"], Difficulty: 7, SetPose: ["BackElbowTouch"] },
				},
			},
			DynamicAllowSetType: function (C, Item, Type) { if (InventoryGet(C, "Cloth") || InventoryGet(C, "ClothLower")) { DialogExtendedMessage = DialogFind(Player, "RemoveClothesForItem", "ItemArms"); return false; } return true; },
		},
		HempRope: {
			NoneTypeName: "BoxTie", DrawType: "Images", ShowCount: 8, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "RopeBondage",
			Types: {
				BoxTie: {
					Property: { Difficulty: 1, Effect: ["Block", "Prone"], SetPose: ["BackBoxTie"] },
				},
				WristTie: {
					Property: { Difficulty: 1, Effect: ["Block", "Prone"], SetPose: ["BackBoxTie"] },
					Expression: [{ Group: "Blush", Name: "Low", Timer: 5 }],
				},
				CrossedBoxtie: {
					Property: { Difficulty: 1, Effect: ["Block", "Prone"], SetPose: ["BackBoxTie"] },
					Expression: [{ Group: "Blush", Name: "Low", Timer: 5 }],
				},
				RopeCuffs: {
					Property: { Difficulty: 1, Effect: ["Block", "Prone"], OverridePriority: 29, SetPose: ["BackCuffs"] },
					Expression: [{ Group: "Blush", Name: "Low", Timer: 5 }],
				},
				WristElbowTie: {
					Property: { Difficulty: 2, Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"] },
					Skills: { Bondage: 2 },
					Expression: [{ Group: "Blush", Name: "Medium", Timer: 5 }],
				},
				SimpleHogtie: {
					Property: { Difficulty: 2, Effect: ["Block", "Prone"], SetPose: ["Hogtied"] },
					Skills: { Bondage: 2 },
					Expression: [{ Group: "Blush", Name: "Medium", Timer: 5 }],
				},
				TightBoxtie: {
					Property: { Difficulty: 3, Effect: ["Block", "Prone"], SetPose: ["BackBoxTie"] },
					Skills: { Bondage: 3 },
					Expression: [{ Group: "Blush", Name: "Medium", Timer: 5 }],
				},
				WristElbowHarnessTie: {
					Property: { Difficulty: 3, Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"] },
					Skills: { Bondage: 3 },
					Expression: [{ Group: "Blush", Name: "Medium", Timer: 5 }],
				},
				KneelingHogtie: {
					Property: { Block: ["ItemHands", "ItemLegs", "ItemFeet", "ItemBoots", "ItemDevices"], Difficulty: 3, Effect: ["Block", "Freeze", "Prone"], SetPose: ["Kneel", "BackElbowTouch"] },
					Skills: { Bondage: 4 },
					Prerequisite: ["NotMounted", "NotSuspended"],
					Expression: [{ Group: "Blush", Name: "Medium", Timer: 10 }],
				},
				Hogtied: {
					Property: { Block: ["ItemHands", "ItemLegs", "ItemFeet", "ItemBoots", "ItemDevices"], Difficulty: 3, Effect: ["Block", "Freeze", "Prone"], SetPose: ["Hogtied"] },
					Skills: { Bondage: 4 },
					Prerequisite: ["NotMounted", "NotSuspended", "CannotBeHogtiedWithAlphaHood"],
					Expression: [{ Group: "Blush", Name: "Medium", Timer: 10 }],
				},
				AllFours: {
					Property: { Block: ["ItemLegs", "ItemFeet", "ItemBoots", "ItemDevices"], Difficulty: 3, Effect: ["ForceKneel"], SetPose: ["AllFours"] },
					Skills: { Bondage: 6 },
					Prerequisite: ["NotMounted", "NotSuspended", "CannotBeHogtiedWithAlphaHood"],
					Expression: [{ Group: "Blush", Name: "Medium", Timer: 10 }],
				},
				SuspensionHogtied: {
					Property: { Block: ["ItemHands", "ItemLegs", "ItemFeet", "ItemBoots"], Difficulty: 6, Effect: ["Block", "Freeze", "Prone"], SetPose: ["Hogtied", "SuspensionHogtied"] },
					Skills: { Bondage: 8 },
					Prerequisite: ["NotMounted", "NotChained", "NotSuspended", "CannotBeHogtiedWithAlphaHood"],
					Expression: [{ Group: "Blush", Name: "Medium", Timer: 10 }],
				},
			},
		},
		LatexButterflyLeotard: {
			NoneTypeName: "Unpolished", DrawType: "Images", ShowCount: 2, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemArmsLatexButterflyLeotard",
			Types: {
				Unpolished: {},
				Polished: {},
			},
		},
		LeatherArmbinder: {
			NoneTypeName: "None", DrawType: "Images", ShowCount: 3, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "LeatherArmbinderSet",
			Types: {
				None: {
					Property: { Difficulty: 0 },
				},
				Strap: {
					Property: { Difficulty: 3 },
				},
				WrapStrap: {
					Property: { Difficulty: 3 },
				},
			},
		},
		LeatherCuffs: {
			NoneTypeName: "None", DrawType: "Images", ShowCount: 4, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemArmsLeatherCuffs",
			Types: {
				None: {
					Property: { Difficulty: 0, Effect: [], SelfUnlock: true },
				},
				Wrist: {
					Property: { Difficulty: 2, Effect: ["Block", "Prone"], SelfUnlock: true, SetPose: ["BackBoxTie"] },
				},
				Elbow: {
					Property: { Difficulty: 4, Effect: ["Block", "Prone"], SelfUnlock: false, SetPose: ["BackElbowTouch"] },
				},
				Both: {
					Property: { Difficulty: 6, Effect: ["Block", "Prone"], SelfUnlock: false, SetPose: ["BackElbowTouch"] },
				},
			},
		},
		LeatherStraitJacket: {
			NoneTypeName: "Loose", DrawType: "Images", ShowCount: 4, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "LeatherStraitJacketNPCReaction",
			Types: {
				Loose: {
					Property: { Difficulty: 0 },
				},
				Normal: {
					Property: { Difficulty: 3 },
				},
				Snug: {
					Property: { Difficulty: 6 },
				},
				Tight: {
					Property: { Difficulty: 9 },
				},
			},
		},
		MermaidSuit: {
			NoneTypeName: "Zipped", DrawType: "Images", ShowCount: 2, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "MermaidSuitNPCReaction",
			Types: {
				Zipped: {
					Property: { Block: ["ItemBreast", "ItemNipples", "ItemNipplesPiercings", "ItemVulva", "ItemVulvaPiercings", "ItemButt"], Difficulty: 0 },
				},
				UnZip: {
					Property: { Block: [] },
				},
			},
		},
		OrnateCuffs: {
			NoneTypeName: "None", DrawType: "Images", ShowCount: 4, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemArmsOrnateCuffsNPCReaction",
			Types: {
				None: {
					Property: { Difficulty: 0, Effect: [], SelfUnlock: true },
				},
				Wrist: {
					Property: { Difficulty: 2, Effect: ["Block", "Prone"], SelfUnlock: true, SetPose: ["BackBoxTie"] },
				},
				Elbow: {
					Property: { Difficulty: 4, Effect: ["Block", "Prone"], SelfUnlock: false, SetPose: ["BackElbowTouch"] },
				},
				Both: {
					Property: { Difficulty: 6, Effect: ["Block", "Prone"], SelfUnlock: false, SetPose: ["BackElbowTouch"] },
				},
			},
		},
		StraitJacket: {
			NoneTypeName: "Loose", DrawType: "Images", ShowCount: 4, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemArmStraitJacketNPCReaction",
			Types: {
				Loose: {
					Property: { Difficulty: 0 },
				},
				Normal: {
					Property: { Difficulty: 3 },
				},
				Snug: {
					Property: { Difficulty: 6 },
				},
				Tight: {
					Property: { Difficulty: 9 },
				},
			},
		},
		SturdyLeatherBelts: {
			NoneTypeName: "One", DrawType: "Images", ShowCount: 3, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemArmsSturdyLeatherBelts",
			Types: {
				One: {},
				Two: {
					Property: { Difficulty: 2 },
				},
				Three: {
					Property: { Difficulty: 4 },
				},
			},
		},
		TightJacket: {
			NoneTypeName: "Basic", DrawType: "Images", ShowCount: 8, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "JacketPrep",
			Types: {
				Basic: {
					Property: { Difficulty: 1, Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"] },
				},
				PulledStraps: {
					Property: { Difficulty: 1, Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"] },
				},
				LiningStraps: {
					Property: { Difficulty: 2, Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"] },
				},
				ExtraPadding: {
					Property: { Difficulty: 2, Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"] },
				},
				PulledLining: {
					Property: { Difficulty: 3, Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"] },
				},
				PulledPadding: {
					Property: { Difficulty: 3, Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"] },
				},
				PaddedLining: {
					Property: { Difficulty: 3, Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"] },
				},
				FullJacket: {
					Property: { Difficulty: 4, Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"] },
				},
			},
		},
		TightJacketCrotch: {
			NoneTypeName: "Basic", DrawType: "Images", ShowCount: 8, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "JacketPrep",
			Types: {
				Basic: {
					Property: { Difficulty: 1, Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"] },
				},
				PulledStraps: {
					Property: { Difficulty: 1, Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"] },
				},
				LiningStraps: {
					Property: { Difficulty: 2, Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"] },
				},
				ExtraPadding: {
					Property: { Difficulty: 2, Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"] },
				},
				PulledLining: {
					Property: { Difficulty: 3, Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"] },
				},
				PulledPadding: {
					Property: { Difficulty: 3, Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"] },
				},
				PaddedLining: {
					Property: { Difficulty: 3, Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"] },
				},
				FullJacket: {
					Property: { Difficulty: 4, Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"] },
				},
			},
		},
		Web: {
			NoneTypeName: "Tangled", DrawType: "Images", ShowCount: 7, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemArmsWeb",
			Types: {
				Tangled: {
					Property: { Difficulty: 0 },
				},
				Wrapped: {
					Property: { AllowPose: ["Kneel"], Block: ["ItemTorso", "ItemHands", "ItemLegs", "ItemFeet", "ItemBoots"], Difficulty: 2, Effect: ["Block", "Freeze", "Prone"], Prerequisite: ["NoFeetSpreader"], SetPose: ["LegsClosed", "BackElbowTouch"] },
					Skills: { Bondage: 0, SelfBondage: 4 },
					Prerequisite: ["NoFeetSpreader"],
				},
				Cocooned: {
					Property: { AllowPose: ["Kneel"], Block: ["ItemVulva", "ItemVulvaPiercings", "ItemButt", "ItemPelvis", "ItemTorso", "ItemHands", "ItemLegs", "ItemFeet", "ItemBoots", "ItemNipples", "ItemNipplesPiercings", "ItemBreast"], Difficulty: 4, Effect: ["Block", "Freeze", "Prone"], Prerequisite: ["NoFeetSpreader"], SetPose: ["LegsClosed", "BackElbowTouch"] },
					Skills: { Bondage: 1, SelfBondage: 5 },
					Prerequisite: ["NoFeetSpreader"],
				},
				Hogtied: {
					Property: { Block: ["ItemVulva", "ItemVulvaPiercings", "ItemButt", "ItemPelvis", "ItemTorso", "ItemHands", "ItemLegs", "ItemFeet", "ItemBoots", "ItemNipples", "ItemNipplesPiercings", "ItemBreast", "ItemDevices"], Difficulty: 4, Effect: ["Block", "Freeze", "Prone"], Hide: ["Cloth", "ClothLower", "ClothAccessory", "Necklace", "Shoes", "Socks"], SetPose: ["Hogtied"] },
					Skills: { Bondage: 3, SelfBondage: 6 },
					Prerequisite: ["NotSuspended", "NoFeetSpreader", "CannotBeHogtiedWithAlphaHood"],
				},
				Suspended: {
					Property: { Block: ["ItemVulva", "ItemVulvaPiercings", "ItemButt", "ItemPelvis", "ItemTorso", "ItemHands", "ItemLegs", "ItemFeet", "ItemBoots", "ItemNipples", "ItemNipplesPiercings", "ItemBreast"], Difficulty: 6, Effect: ["Block", "Freeze", "Prone"], SetPose: ["LegsClosed", "BackElbowTouch", "Suspension"] },
					Skills: { Bondage: 4, SelfBondage: 8 },
					Prerequisite: ["NoFeetSpreader", "NotChained", "CannotBeHogtiedWithAlphaHood"],
				},
				KneelingSuspended: {
					Property: { Block: ["ItemVulva", "ItemVulvaPiercings", "ItemButt", "ItemPelvis", "ItemTorso", "ItemHands", "ItemLegs", "ItemFeet", "ItemBoots", "ItemNipples", "ItemNipplesPiercings", "ItemBreast"], Difficulty: 8, Effect: ["Block", "Freeze", "Prone"], Hide: ["BodyLower", "Cloth", "ClothLower", "Shoes", "SuitLower", "Panties", "Socks", "Pussy", "ItemFeet", "ItemLegs", "ItemVulva", "ItemVulvaPiercings", "ItemButt", "ItemPelvis", "ItemBoots", "ItemHands", "ItemNipples", "ItemNipplesPiercings", "ItemBreast"], SetPose: ["LegsClosed", "BackElbowTouch", "Suspension"] },
					Skills: { Bondage: 5, SelfBondage: 8 },
					Prerequisite: ["NoFeetSpreader", "NotChained", "CannotBeHogtiedWithAlphaHood"],
				},
				SuspensionHogtied: {
					Property: { Block: ["ItemVulva", "ItemVulvaPiercings", "ItemButt", "ItemPelvis", "ItemTorso", "ItemHands", "ItemLegs", "ItemFeet", "ItemBoots", "ItemNipples", "ItemNipplesPiercings", "ItemBreast", "ItemDevices"], Difficulty: 11, Effect: ["Block", "Freeze", "Prone"], Hide: ["Cloth", "ClothLower", "ClothAccessory", "Necklace", "Shoes", "Socks"], SetPose: ["Hogtied", "SuspensionHogtied"] },
					Skills: { Bondage: 5, SelfBondage: 9 },
					Prerequisite: ["NotSuspended", "NoFeetSpreader", "NotChained", "CannotBeHogtiedWithAlphaHood"],
				},
			},
			DynamicDictionary: function (_, Item, OldType) { const keys = Object.keys(AssetTypeInfo.ItemArms.Web.Types); const NewIndex = keys.indexOf(InventoryItemGetType(Item)); const PreviousIndex = keys.indexOf(OldType); const ActionDialog = DialogFind(Player, NewIndex > PreviousIndex ? "tightens" : "loosens", "ItemArms"); return [{ Tag: "Action", Text: ActionDialog }]; },
		},
		WristShackles: {
			NoneTypeName: "InFront", DrawType: "Images", ShowCount: 2, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemArmsWristShackles",
			Types: {
				InFront: {},
				Behind: {
					Property: { Difficulty: 3, Effect: ["Block", "Prone"], SetPose: ["BackCuffs"] },
				},
			},
		},
		Zipties: {
			NoneTypeName: "ZipLight", DrawType: "Images", ShowCount: 8, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "Zip",
			Types: {
				ZipLight: {
					Property: { Difficulty: 1, Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"] },
				},
				ZipMedium: {
					Property: { Difficulty: 2, Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"] },
					Expression: [{ Group: "Blush", Name: "Low", Timer: 5 }],
				},
				ZipFull: {
					Property: { Difficulty: 3, Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"] },
					Expression: [{ Group: "Blush", Name: "Low", Timer: 5 }],
				},
				ZipElbowWrist: {
					Property: { Difficulty: 1, Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"] },
					Expression: [{ Group: "Blush", Name: "Medium", Timer: 5 }],
				},
				ZipWristLight: {
					Property: { Difficulty: 3, Effect: ["Block", "Prone"], SetPose: ["BackBoxTie"] },
					Expression: [{ Group: "Blush", Name: "Medium", Timer: 5 }],
				},
				ZipWristMedium: {
					Property: { Difficulty: 3, Effect: ["Block", "Prone"], SetPose: ["BackBoxTie"] },
					Expression: [{ Group: "Blush", Name: "Medium", Timer: 5 }],
				},
				ZipWristFull: {
					Property: { Difficulty: 3, Effect: ["Block", "Prone"], SetPose: ["BackBoxTie"] },
					Expression: [{ Group: "Blush", Name: "Medium", Timer: 5 }],
				},
				ZipWrist: {
					Property: { Difficulty: 1, Effect: ["Block", "Prone"], SetPose: ["BackBoxTie"] },
					Expression: [{ Group: "Blush", Name: "Medium", Timer: 5 }],
				},
				ZipKneelingHogtie: {
					Property: { Block: ["ItemHands", "ItemLegs", "ItemFeet", "ItemBoots", "ItemDevices"], Difficulty: 3, Effect: ["Block", "Freeze", "Prone"], SetPose: ["Kneel", "BackElbowTouch"] },
					Prerequisite: ["NotMounted", "NotSuspended"],
					Expression: [{ Group: "Blush", Name: "Medium", Timer: 10 }],
				},
				ZipHogtie: {
					Property: { Block: ["ItemHands", "ItemLegs", "ItemFeet", "ItemBoots", "ItemDevices"], Difficulty: 3, Effect: ["Block", "Freeze", "Prone"], SetPose: ["Hogtied"] },
					Prerequisite: ["NotMounted", "NotSuspended", "CannotBeHogtiedWithAlphaHood"],
					Expression: [{ Group: "Blush", Name: "Medium", Timer: 10 }],
				},
				ZipAllFours: {
					Property: { Block: ["ItemLegs", "ItemFeet", "ItemBoots", "ItemDevices"], Difficulty: 3, Effect: ["ForceKneel"], SetPose: ["AllFours"] },
					Prerequisite: ["NotMounted", "NotSuspended", "CannotBeHogtiedWithAlphaHood"],
					Expression: [{ Group: "Blush", Name: "Medium", Timer: 10 }],
				},
			},
		},
	},
	ItemDevices: {
		Crib: {
			NoneTypeName: "Open", DrawType: "Images", ShowCount: 3, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemBootsToeTapeNPCReaction",
			Types: {
				Open: {
					Property: { Difficulty: 0 },
				},
				Closed: {
					Property: { Difficulty: 20 },
				},
				Stuffed: {
					Property: { Difficulty: 24 },
				},
			},
		},
		Locker: {
			NoneTypeName: "Seethrough", DrawType: "Images", ShowCount: 2, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemBootsToeTapeNPCReaction",
			Types: {
				Seethrough: {},
				Opaque: {},
			},
		},
		SmallLocker: {
			NoneTypeName: "Seethrough", DrawType: "Images", ShowCount: 2, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemBootsToeTapeNPCReaction",
			Types: {
				Seethrough: {},
				Opaque: {},
			},
		},
		SmallVentlessLocker: {
			NoneTypeName: "Seethrough", DrawType: "Images", ShowCount: 2, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemBootsToeTapeNPCReaction",
			Types: {
				Seethrough: {},
				Opaque: {},
			},
		},
		VentlessLocker: {
			NoneTypeName: "Seethrough", DrawType: "Images", ShowCount: 2, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemBootsToeTapeNPCReaction",
			Types: {
				Seethrough: {},
				Opaque: {},
			},
		},
	},
	ItemFeet: {
		HempRope: {
			NoneTypeName: "Basic", DrawType: "Images", ShowCount: 6, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemBootsToeTapeNPCReaction",
			Types: {
				Basic: {
					Property: { Difficulty: 1, SetPose: ["LegsClosed"] },
				},
				FullBinding: {
					Property: { Difficulty: 2, SetPose: ["LegsClosed"] },
					Skills: { Bondage: 2 },
				},
				Link: {
					Property: { Difficulty: 2, SetPose: ["LegsClosed"] },
					Skills: { Bondage: 2 },
				},
				Diamond: {
					Property: { Difficulty: 4, SetPose: ["LegsClosed"] },
					Skills: { Bondage: 4 },
				},
				Mermaid: {
					Property: { Difficulty: 4, SetPose: ["LegsClosed"] },
					Skills: { Bondage: 4 },
				},
				Suspension: {
					Property: { Difficulty: 6, SetPose: ["LegsClosed", "Suspension"] },
					Skills: { Bondage: 6 },
					Prerequisite: ["NotKneeling", "NotMounted", "NotChained", "NotHogtied"],
					Expression: [{ Group: "Blush", Name: "High", Timer: 30 }],
				},
			},
		},
		Zipties: {
			NoneTypeName: "ZipFeetLight", DrawType: "Images", ShowCount: 3, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemBootsToeTapeNPCReaction",
			Types: {
				ZipFeetLight: {
					Property: { Difficulty: 1, SetPose: ["LegsClosed"] },
				},
				ZipFeetMedium: {
					Property: { Difficulty: 2, SetPose: ["LegsClosed"] },
				},
				ZipFeetFull: {
					Property: { Difficulty: 2, SetPose: ["LegsClosed"] },
				},
			},
		},
	},
	ItemHead: {
		DuctTape: {
			NoneTypeName: "Double", DrawType: "Images", ShowCount: 3, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemBootsToeTapeNPCReaction",
			Types: {
				Double: {
					Property: { Block: ["ItemNose"], Effect: ["BlindNormal", "Prone"] },
				},
				Wrap: {
					Property: { Block: ["ItemNose"], Effect: ["BlindNormal", "Prone"] },
				},
				Mummy: {
					Property: { Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars", "ItemHood", "ItemNose"], Effect: ["GagNormal", "BlindNormal", "Prone", "BlockMouth"], Hide: ["ItemMouth", "ItemMouth2", "ItemMouth3", "HairFront", "HairBack"] },
				},
			},
		},
		WebBlindfold: {
			NoneTypeName: "Blindfold", DrawType: "Images", ShowCount: 2, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemBootsToeTapeNPCReaction",
			Types: {
				Blindfold: {
					Property: { Difficulty: 0 },
				},
				Cocoon: {
					Property: { Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars", "ItemHood", "ItemNose"], Difficulty: 30, Effect: ["BlindHeavy", "Prone", "GagNormal", "BlockMouth"], Hide: ["HairFront", "HairBack", "Glasses", "Hat", "ItemMouth", "ItemMouth2", "ItemMouth3"] },
				},
			},
		},
	},
	ItemLegs: {
		DuctTape: {
			NoneTypeName: "Legs", DrawType: "Images", ShowCount: 4, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemBootsToeTapeNPCReaction",
			Types: {
				Legs: {
					Property: { Difficulty: 0 },
				},
				HalfLegs: {
					Property: { Difficulty: 2, Hide: ["ClothLower"] },
				},
				MostLegs: {
					Property: { Difficulty: 4, Hide: ["ClothLower"] },
				},
				CompleteLegs: {
					Property: { Difficulty: 6, Hide: ["ClothLower"] },
				},
			},
		},
		HempRope: {
			NoneTypeName: "Basic", DrawType: "Images", ShowCount: 6, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemBootsToeTapeNPCReaction",
			Types: {
				Basic: {
					Property: { Difficulty: 1, SetPose: ["LegsClosed"] },
				},
				FullBinding: {
					Property: { Difficulty: 2, SetPose: ["LegsClosed"] },
					Skills: { Bondage: 2 },
				},
				Link: {
					Property: { Difficulty: 2, SetPose: ["LegsClosed"] },
					Skills: { Bondage: 2 },
				},
				Frogtie: {
					Property: { Block: ["ItemFeet"], Difficulty: 3, Effect: ["ForceKneel"], SetPose: ["Kneel"] },
					Skills: { Bondage: 3 },
					Prerequisite: ["NotSuspended", "CanKneel"],
				},
				Crossed: {
					Property: { Difficulty: 4, SetPose: ["LegsClosed"] },
					Skills: { Bondage: 4 },
				},
				Mermaid: {
					Property: { Difficulty: 4, SetPose: ["LegsClosed"] },
					Skills: { Bondage: 4 },
				},
			},
		},
		SturdyLeatherBelts: {
			NoneTypeName: "One", DrawType: "Images", ShowCount: 2, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemBootsToeTapeNPCReaction",
			Types: {
				One: {},
				Two: {
					Property: { Difficulty: 2 },
				},
			},
		},
		Zipties: {
			NoneTypeName: "ZipLegLight", DrawType: "Images", ShowCount: 4, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemBootsToeTapeNPCReaction",
			Types: {
				ZipLegLight: {
					Property: { Difficulty: 1, SetPose: ["LegsClosed"] },
				},
				ZipLegMedium: {
					Property: { Difficulty: 2, SetPose: ["LegsClosed"] },
				},
				ZipLegFull: {
					Property: { Difficulty: 2, SetPose: ["LegsClosed"] },
				},
				ZipFrogtie: {
					Property: { Block: ["ItemFeet"], Difficulty: 3, Effect: ["ForceKneel"], SetPose: ["Kneel"] },
					Prerequisite: ["NotSuspended", "CanKneel"],
				},
			},
		},
	},
	ItemMouth: {
		ClothGag: {
			NoneTypeName: "Small", DrawType: "Images", ShowCount: 4, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ClothGag",
			Types: {
				Small: {
					Property: { Effect: ["BlockMouth", "GagVeryLight"] },
				},
				Cleave: {
					Property: { Effect: ["BlockMouth", "GagLight"] },
				},
				OTM: {
					Property: { Effect: ["BlockMouth", "GagEasy"] },
				},
				OTN: {
					Property: { Effect: ["BlockMouth", "GagEasy"] },
				},
			},
		},
		DildoPlugGag: {
			NoneTypeName: "Open", DrawType: "Images", ShowCount: 2, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemMouthDildoPlugGag",
			Types: {
				Open: {
					Property: { Effect: ["GagEasy", "OpenMouth"] },
				},
				Plug: {
					Property: { Effect: ["BlockMouth", "GagTotal2"] },
				},
			},
		},
		MilkBottle: {
			NoneTypeName: "Rest", DrawType: "Images", ShowCount: 3, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "MilkBottle",
			Types: {
				Rest: {},
				Raised: {},
				Chug: {},
			},
		},
		PlugGag: {
			NoneTypeName: "Open", DrawType: "Images", ShowCount: 2, Unextend: true, TypeLocking: false, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemMouthPlugGag",
			Types: {
				Open: {
					Property: { Effect: ["GagMedium", "OpenMouth"] },
				},
				Plug: {
					Property: { Effect: ["BlockMouth", "GagTotal"] },
				},
			},
		},
	},
}
