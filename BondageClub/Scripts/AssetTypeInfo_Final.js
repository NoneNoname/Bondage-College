"use strict"

var AssetTypeInfo = {
	ItemArms: {
		BitchSuit: {
			NoneTypeName: "Latex", ShowCount: 2, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "BitchSuitType",
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
			NoneTypeName: "BoxTie", ShowCount: 8, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ChainBondage",
			Types: {
				AllFours: {
					Property: { Effect: ["ForceKneel"], Block: ["ItemLegs", "ItemFeet", "ItemBoots", "ItemDevices"], SetPose: ["AllFours"], Difficulty: 3 },
					Skills: { Bondage: 6 },
					Prerequisite: [NotMounted, NotSuspended, CannotBeHogtiedWithAlphaHood],
					Expression: [{ Group: "Blush", Name: "Medium", Timer: "10" }],
				},
				BoxTie: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackBoxTie"], Difficulty: 1 },
				},
				ChainCuffs: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackCuffs"], Difficulty: 1, OverridePriority: 29 },
					Expression: [{ Group: "Blush", Name: "Low", Timer: "5" }],
				},
				Hogtied: {
					Property: { Effect: ["Block", "Freeze", "Prone"], Block: ["ItemHands", "ItemLegs", "ItemFeet", "ItemBoots", "ItemDevices"], SetPose: ["Hogtied"], Difficulty: 3 },
					Skills: { Bondage: 4 },
					Prerequisite: [NotMounted, NotSuspended, CannotBeHogtiedWithAlphaHood],
					Expression: [{ Group: "Blush", Name: "Medium", Timer: "10" }],
				},
				KneelingHogtie: {
					Property: { Effect: ["Block", "Freeze", "Prone"], Block: ["ItemHands", "ItemLegs", "ItemFeet", "ItemBoots", "ItemDevices"], SetPose: ["Kneel", "BackElbowTouch"], Difficulty: 3 },
					Skills: { Bondage: 4 },
					Prerequisite: [NotMounted, NotSuspended],
					Expression: [{ Group: "Blush", Name: "Medium", Timer: "10" }],
				},
				SuspensionHogtied: {
					Property: { Effect: ["Block", "Freeze", "Prone"], Block: ["ItemHands", "ItemLegs", "ItemFeet", "ItemBoots"], SetPose: ["Hogtied", "SuspensionHogtied"], Difficulty: 6 },
					Skills: { Bondage: 8 },
					Prerequisite: [NotMounted, NotChained, NotSuspended, CannotBeHogtiedWithAlphaHood],
					Expression: [{ Group: "Blush", Name: "Medium", Timer: "10" }],
				},
				WristElbowHarnessTie: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"], Difficulty: 3 },
					Skills: { Bondage: 3 },
					Expression: [{ Group: "Blush", Name: "Medium", Timer: "5" }],
				},
				WristElbowTie: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"], Difficulty: 2 },
					Skills: { Bondage: 2 },
					Expression: [{ Group: "Blush", Name: "Medium", Timer: "5" }],
				},
				WristTie: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackBoxTie"], Difficulty: 1 },
					Expression: [{ Group: "Blush", Name: "Low", Timer: "5" }],
				},
			},
		},
		DuctTape: {
			NoneTypeName: "Arms", ShowCount: 5, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemArmsDuctTape",
			Types: {
				Arms: {
					Property: { Difficulty: 1 },
				},
				Bottom: {
					Property: { SetPose: ["BackElbowTouch"], Block: ["ItemVulva", "ItemButt", "ItemPelvis", "ItemVulvaPiercings"], Difficulty: 2 },
				},
				Complete: {
					Property: { SetPose: ["BackElbowTouch"], Block: ["ItemVulva", "ItemButt", "ItemPelvis", "ItemTorso", "ItemBreast", "ItemNipples", "ItemVulvaPiercings", "ItemNipplesPiercings"], Difficulty: 7 },
				},
				Full: {
					Property: { SetPose: ["BackElbowTouch"], Block: ["ItemVulva", "ItemButt", "ItemPelvis", "ItemTorso", "ItemBreast", "ItemNipples", "ItemVulvaPiercings", "ItemNipplesPiercings"], Difficulty: 6 },
				},
				Top: {
					Property: { SetPose: ["BackElbowTouch"], Block: ["ItemTorso", "ItemBreast", "ItemNipples", "ItemNipplesPiercings"], Difficulty: 4 },
				},
			},
		},
		HempRope: {
			NoneTypeName: "BoxTie", ShowCount: 8, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "RopeBondage",
			Types: {
				AllFours: {
					Property: { Effect: ["ForceKneel"], Block: ["ItemLegs", "ItemFeet", "ItemBoots", "ItemDevices"], SetPose: ["AllFours"], Difficulty: 3 },
					Skills: { Bondage: 6 },
					Prerequisite: [NotMounted, NotSuspended, CannotBeHogtiedWithAlphaHood],
					Expression: [{ Group: "Blush", Name: "Medium", Timer: "10" }],
				},
				BoxTie: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackBoxTie"], Difficulty: 1 },
				},
				CrossedBoxtie: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackBoxTie"], Difficulty: 1 },
					Expression: [{ Group: "Blush", Name: "Low", Timer: "5" }],
				},
				Hogtied: {
					Property: { Effect: ["Block", "Freeze", "Prone"], Block: ["ItemHands", "ItemLegs", "ItemFeet", "ItemBoots", "ItemDevices"], SetPose: ["Hogtied"], Difficulty: 3 },
					Skills: { Bondage: 4 },
					Prerequisite: [NotMounted, NotSuspended, CannotBeHogtiedWithAlphaHood],
					Expression: [{ Group: "Blush", Name: "Medium", Timer: "10" }],
				},
				KneelingHogtie: {
					Property: { Effect: ["Block", "Freeze", "Prone"], Block: ["ItemHands", "ItemLegs", "ItemFeet", "ItemBoots", "ItemDevices"], SetPose: ["Kneel", "BackElbowTouch"], Difficulty: 3 },
					Skills: { Bondage: 4 },
					Prerequisite: [NotMounted, NotSuspended],
					Expression: [{ Group: "Blush", Name: "Medium", Timer: "10" }],
				},
				RopeCuffs: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackCuffs"], Difficulty: 1, OverridePriority: 29 },
					Expression: [{ Group: "Blush", Name: "Low", Timer: "5" }],
				},
				SimpleHogtie: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["Hogtied"], Difficulty: 2 },
					Skills: { Bondage: 2 },
					Expression: [{ Group: "Blush", Name: "Medium", Timer: "5" }],
				},
				SuspensionHogtied: {
					Property: { Effect: ["Block", "Freeze", "Prone"], Block: ["ItemHands", "ItemLegs", "ItemFeet", "ItemBoots"], SetPose: ["Hogtied", "SuspensionHogtied"], Difficulty: 6 },
					Skills: { Bondage: 8 },
					Prerequisite: [NotMounted, NotChained, NotSuspended, CannotBeHogtiedWithAlphaHood],
					Expression: [{ Group: "Blush", Name: "Medium", Timer: "10" }],
				},
				TightBoxtie: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackBoxTie"], Difficulty: 3 },
					Skills: { Bondage: 3 },
					Expression: [{ Group: "Blush", Name: "Medium", Timer: "5" }],
				},
				WristElbowHarnessTie: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"], Difficulty: 3 },
					Skills: { Bondage: 3 },
					Expression: [{ Group: "Blush", Name: "Medium", Timer: "5" }],
				},
				WristElbowTie: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"], Difficulty: 2 },
					Skills: { Bondage: 2 },
					Expression: [{ Group: "Blush", Name: "Medium", Timer: "5" }],
				},
				WristTie: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackBoxTie"], Difficulty: 1 },
					Expression: [{ Group: "Blush", Name: "Low", Timer: "5" }],
				},
			},
		},
		LatexButterflyLeotard: {
			NoneTypeName: "Unpolished", ShowCount: 2, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemArmsLatexButterflyLeotard",
			Types: {
				Polished: {
				},
				Unpolished: {
				},
			},
		},
		LeatherArmbinder: {
			NoneTypeName: "None", ShowCount: 3, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "LeatherArmbinderSet",
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
			NoneTypeName: "None", ShowCount: 4, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemArmsLeatherCuffs",
			Types: {
				Both: {
					Property: { Difficulty: 6, Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"], SelfUnlock: false },
				},
				Elbow: {
					Property: { Difficulty: 4, Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"], SelfUnlock: false },
				},
				None: {
					Property: { Difficulty: 0, Effect: [], SelfUnlock: true },
				},
				Wrist: {
					Property: { Difficulty: 2, Effect: ["Block", "Prone"], SetPose: ["BackBoxTie"], SelfUnlock: true },
				},
			},
		},
		LeatherStraitJacket: {
			NoneTypeName: "Loose", ShowCount: 4, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "LeatherStraitJacketNPCReaction",
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
			NoneTypeName: "Zipped", ShowCount: 2, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "MermaidSuitNPCReaction",
			Types: {
				UnZip: {
					Property: { Block: [] },
				},
				Zipped: {
					Property: { Difficulty: 0, Block: ["ItemBreast", "ItemNipples", "ItemNipplesPiercings", "ItemVulva", "ItemVulvaPiercings", "ItemButt"] },
				},
			},
		},
		OrnateCuffs: {
			NoneTypeName: "None", ShowCount: 4, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemArmsOrnateCuffsNPCReaction",
			Types: {
				Both: {
					Property: { Difficulty: 6, Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"], SelfUnlock: false },
				},
				Elbow: {
					Property: { Difficulty: 4, Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"], SelfUnlock: false },
				},
				None: {
					Property: { Difficulty: 0, Effect: [], SelfUnlock: true },
				},
				Wrist: {
					Property: { Difficulty: 2, Effect: ["Block", "Prone"], SetPose: ["BackBoxTie"], SelfUnlock: true },
				},
			},
		},
		StraitJacket: {
			NoneTypeName: "Loose", ShowCount: 4, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemArmStraitJacketNPCReaction",
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
			NoneTypeName: "One", ShowCount: 3, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemArmsSturdyLeatherBelts",
			Types: {
				One: {
				},
				Three: {
					Property: { Difficulty: 4 },
				},
				Two: {
					Property: { Difficulty: 2 },
				},
			},
		},
		TightJacket: {
			NoneTypeName: "Basic", ShowCount: 8, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "JacketPrep",
			Types: {
				Basic: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"], Difficulty: 1 },
				},
				ExtraPadding: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"], Difficulty: 2 },
				},
				FullJacket: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"], Difficulty: 4 },
				},
				LiningStraps: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"], Difficulty: 2 },
				},
				PaddedLining: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"], Difficulty: 3 },
				},
				PulledLining: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"], Difficulty: 3 },
				},
				PulledPadding: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"], Difficulty: 3 },
				},
				PulledStraps: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"], Difficulty: 1 },
				},
			},
		},
		TightJacketCrotch: {
			NoneTypeName: "Basic", ShowCount: 8, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "JacketPrep",
			Types: {
				Basic: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"], Difficulty: 1 },
				},
				ExtraPadding: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"], Difficulty: 2 },
				},
				FullJacket: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"], Difficulty: 4 },
				},
				LiningStraps: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"], Difficulty: 2 },
				},
				PaddedLining: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"], Difficulty: 3 },
				},
				PulledLining: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"], Difficulty: 3 },
				},
				PulledPadding: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"], Difficulty: 3 },
				},
				PulledStraps: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"], Difficulty: 1 },
				},
			},
		},
		Web: {
			NoneTypeName: "Tangled", ShowCount: 7, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemArmsWeb",
			Types: {
				Cocooned: {
					Property: { Difficulty: 4, Prerequisite: ["NoFeetSpreader"], AllowPose: ["Kneel"], SetPose: ["LegsClosed", "BackElbowTouch"], Effect: ["Block", "Freeze", "Prone"], Block: ["ItemVulva", "ItemVulvaPiercings", "ItemButt", "ItemPelvis", "ItemTorso", "ItemHands", "ItemLegs", "ItemFeet", "ItemBoots", "ItemNipples", "ItemNipplesPiercings", "ItemBreast"] },
					Prerequisite: [NoFeetSpreader],
				},
				Hogtied: {
					Property: { Difficulty: 4, SetPose: ["Hogtied"], Effect: ["Block", "Freeze", "Prone"], Hide: ["Cloth", "ClothLower", "ClothAccessory", "Necklace", "Shoes", "Socks"], Block: ["ItemVulva", "ItemVulvaPiercings", "ItemButt", "ItemPelvis", "ItemTorso", "ItemHands", "ItemLegs", "ItemFeet", "ItemBoots", "ItemNipples", "ItemNipplesPiercings", "ItemBreast", "ItemDevices"] },
					Prerequisite: [NotSuspended, NoFeetSpreader, CannotBeHogtiedWithAlphaHood],
				},
				KneelingSuspended: {
					Property: { Difficulty: 8, SetPose: ["LegsClosed", "BackElbowTouch", "Suspension"], Effect: ["Block", "Freeze", "Prone"], Hide: ["BodyLower", "Cloth", "ClothLower", "Shoes", "SuitLower", "Panties", "Socks", "Pussy", "ItemFeet", "ItemLegs", "ItemVulva", "ItemVulvaPiercings", "ItemButt", "ItemPelvis", "ItemBoots", "ItemHands", "ItemNipples", "ItemNipplesPiercings", "ItemBreast"], Block: ["ItemVulva", "ItemVulvaPiercings", "ItemButt", "ItemPelvis", "ItemTorso", "ItemHands", "ItemLegs", "ItemFeet", "ItemBoots", "ItemNipples", "ItemNipplesPiercings", "ItemBreast"] },
					Prerequisite: [NoFeetSpreader, NotChained, CannotBeHogtiedWithAlphaHood],
				},
				Suspended: {
					Property: { Difficulty: 6, SetPose: ["LegsClosed", "BackElbowTouch", "Suspension"], Effect: ["Block", "Freeze", "Prone"], Block: ["ItemVulva", "ItemVulvaPiercings", "ItemButt", "ItemPelvis", "ItemTorso", "ItemHands", "ItemLegs", "ItemFeet", "ItemBoots", "ItemNipples", "ItemNipplesPiercings", "ItemBreast"] },
					Prerequisite: [NoFeetSpreader, NotChained, CannotBeHogtiedWithAlphaHood],
				},
				SuspensionHogtied: {
					Property: { Difficulty: 11, SetPose: ["Hogtied", "SuspensionHogtied"], Effect: ["Block", "Freeze", "Prone"], Hide: ["Cloth", "ClothLower", "ClothAccessory", "Necklace", "Shoes", "Socks"], Block: ["ItemVulva", "ItemVulvaPiercings", "ItemButt", "ItemPelvis", "ItemTorso", "ItemHands", "ItemLegs", "ItemFeet", "ItemBoots", "ItemNipples", "ItemNipplesPiercings", "ItemBreast", "ItemDevices"] },
					Prerequisite: [NotSuspended, NoFeetSpreader, NotChained, CannotBeHogtiedWithAlphaHood],
				},
				Tangled: {
					Property: { Difficulty: 0 },
				},
				Wrapped: {
					Property: { Difficulty: 2, Prerequisite: ["NoFeetSpreader"], AllowPose: ["Kneel"], SetPose: ["LegsClosed", "BackElbowTouch"], Effect: ["Block", "Freeze", "Prone"], Block: ["ItemTorso", "ItemHands", "ItemLegs", "ItemFeet", "ItemBoots"] },
					Prerequisite: [NoFeetSpreader],
				},
			},
		},
		WristShackles: {
			NoneTypeName: "InFront", ShowCount: 2, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemArmsWristShackles",
			Types: {
				Behind: {
					Property: { SetPose: ["BackCuffs"], Effect: ["Block", "Prone"], Difficulty: 3 },
				},
				InFront: {
				},
			},
		},
		Zipties: {
			NoneTypeName: "ZipLight", ShowCount: 8, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "Zip",
			Types: {
				ZipAllFours: {
					Property: { Effect: ["ForceKneel"], Block: ["ItemLegs", "ItemFeet", "ItemBoots", "ItemDevices"], SetPose: ["AllFours"], Difficulty: 3 },
					Prerequisite: [NotMounted, NotSuspended, CannotBeHogtiedWithAlphaHood],
					Expression: [{ Group: "Blush", Name: "Medium", Timer: "10" }],
				},
				ZipElbowWrist: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"], Difficulty: 1 },
					Expression: [{ Group: "Blush", Name: "Medium", Timer: "5" }],
				},
				ZipFull: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"], Difficulty: 3 },
					Expression: [{ Group: "Blush", Name: "Low", Timer: "5" }],
				},
				ZipHogtie: {
					Property: { Effect: ["Block", "Freeze", "Prone"], Block: ["ItemHands", "ItemLegs", "ItemFeet", "ItemBoots", "ItemDevices"], SetPose: ["Hogtied"], Difficulty: 3 },
					Prerequisite: [NotMounted, NotSuspended, CannotBeHogtiedWithAlphaHood],
					Expression: [{ Group: "Blush", Name: "Medium", Timer: "10" }],
				},
				ZipKneelingHogtie: {
					Property: { Effect: ["Block", "Freeze", "Prone"], Block: ["ItemHands", "ItemLegs", "ItemFeet", "ItemBoots", "ItemDevices"], SetPose: ["Kneel", "BackElbowTouch"], Difficulty: 3 },
					Prerequisite: [NotMounted, NotSuspended],
					Expression: [{ Group: "Blush", Name: "Medium", Timer: "10" }],
				},
				ZipLight: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"], Difficulty: 1 },
				},
				ZipMedium: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackElbowTouch"], Difficulty: 2 },
					Expression: [{ Group: "Blush", Name: "Low", Timer: "5" }],
				},
				ZipWrist: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackBoxTie"], Difficulty: 1 },
					Expression: [{ Group: "Blush", Name: "Medium", Timer: "5" }],
				},
				ZipWristFull: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackBoxTie"], Difficulty: 3 },
					Expression: [{ Group: "Blush", Name: "Medium", Timer: "5" }],
				},
				ZipWristLight: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackBoxTie"], Difficulty: 3 },
					Expression: [{ Group: "Blush", Name: "Medium", Timer: "5" }],
				},
				ZipWristMedium: {
					Property: { Effect: ["Block", "Prone"], SetPose: ["BackBoxTie"], Difficulty: 3 },
					Expression: [{ Group: "Blush", Name: "Medium", Timer: "5" }],
				},
			},
		},
	},
	ItemDevices: {
		Crib: {
			NoneTypeName: "Open", ShowCount: 3, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemBootsToeTapeNPCReaction",
			Types: {
				Closed: {
					Property: { Difficulty: 20 },
				},
				Open: {
					Property: { Difficulty: 0 },
				},
				Stuffed: {
					Property: { Difficulty: 24 },
				},
			},
		},
		Locker: {
			NoneTypeName: "Seethrough", ShowCount: 2, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemBootsToeTapeNPCReaction",
			Types: {
				Opaque: {
				},
				Seethrough: {
				},
			},
		},
		SmallLocker: {
			NoneTypeName: "Seethrough", ShowCount: 2, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemBootsToeTapeNPCReaction",
			Types: {
				Opaque: {
				},
				Seethrough: {
				},
			},
		},
		SmallVentlessLocker: {
			NoneTypeName: "Seethrough", ShowCount: 2, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemBootsToeTapeNPCReaction",
			Types: {
				Opaque: {
				},
				Seethrough: {
				},
			},
		},
		VentlessLocker: {
			NoneTypeName: "Seethrough", ShowCount: 2, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemBootsToeTapeNPCReaction",
			Types: {
				Opaque: {
				},
				Seethrough: {
				},
			},
		},
	},
	ItemFeet: {
		HempRope: {
			NoneTypeName: "Basic", ShowCount: 6, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemBootsToeTapeNPCReaction",
			Types: {
				Basic: {
					Property: { SetPose: ["LegsClosed"], Difficulty: 1 },
				},
				Diamond: {
					Property: { SetPose: ["LegsClosed"], Difficulty: 4 },
				},
				FullBinding: {
					Property: { SetPose: ["LegsClosed"], Difficulty: 2 },
				},
				Link: {
					Property: { SetPose: ["LegsClosed"], Difficulty: 2 },
				},
				Mermaid: {
					Property: { SetPose: ["LegsClosed"], Difficulty: 4 },
				},
				Suspension: {
					Property: { SetPose: ["LegsClosed", "Suspension"], Difficulty: 6 },
					Prerequisite: [NotKneeling, NotMounted, NotChained, NotHogtied],
					Expression: [{ Group: "Blush", Name: "High", Timer: "30" }],
				},
			},
		},
		Zipties: {
			NoneTypeName: "ZipFeetLight", ShowCount: 3, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemBootsToeTapeNPCReaction",
			Types: {
				ZipFeetFull: {
					Property: { SetPose: ["LegsClosed"], Difficulty: 2 },
				},
				ZipFeetLight: {
					Property: { SetPose: ["LegsClosed"], Difficulty: 1 },
				},
				ZipFeetMedium: {
					Property: { SetPose: ["LegsClosed"], Difficulty: 2 },
				},
			},
		},
	},
	ItemHead: {
		DuctTape: {
			NoneTypeName: "Double", ShowCount: 3, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemBootsToeTapeNPCReaction",
			Types: {
				Double: {
					Property: { Block: ["ItemNose"], Effect: ["BlindNormal", "Prone"] },
				},
				Mummy: {
					Property: { Hide: ["ItemMouth", "ItemMouth2", "ItemMouth3", "HairFront", "HairBack"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars", "ItemHood", "ItemNose"], Effect: ["GagNormal", "BlindNormal", "Prone", "BlockMouth"] },
				},
				Wrap: {
					Property: { Block: ["ItemNose"], Effect: ["BlindNormal", "Prone"] },
				},
			},
		},
		WebBlindfold: {
			NoneTypeName: "Blindfold", ShowCount: 2, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemBootsToeTapeNPCReaction",
			Types: {
				Blindfold: {
					Property: { Difficulty: 0 },
				},
				Cocoon: {
					Property: { Difficulty: 30, Hide: ["HairFront", "HairBack", "Glasses", "Hat", "ItemMouth", "ItemMouth2", "ItemMouth3"], Block: ["ItemMouth", "ItemMouth2", "ItemMouth3", "ItemEars", "ItemHood", "ItemNose"], Effect: ["BlindHeavy", "Prone", "GagNormal", "BlockMouth"] },
				},
			},
		},
	},
	ItemLegs: {
		DuctTape: {
			NoneTypeName: "Legs", ShowCount: 4, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemBootsToeTapeNPCReaction",
			Types: {
				CompleteLegs: {
					Property: { Hide: ["ClothLower"], Difficulty: 6 },
				},
				HalfLegs: {
					Property: { Hide: ["ClothLower"], Difficulty: 2 },
				},
				Legs: {
					Property: { Difficulty: 0 },
				},
				MostLegs: {
					Property: { Hide: ["ClothLower"], Difficulty: 4 },
				},
			},
		},
		HempRope: {
			NoneTypeName: "Basic", ShowCount: 6, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemBootsToeTapeNPCReaction",
			Types: {
				Basic: {
					Property: { SetPose: ["LegsClosed"], Difficulty: 1 },
				},
				Crossed: {
					Property: { SetPose: ["LegsClosed"], Difficulty: 4 },
				},
				Frogtie: {
					Property: { SetPose: ["Kneel"], Block: ["ItemFeet"], Effect: ["ForceKneel"], Difficulty: 3 },
					Prerequisite: [NotSuspended, CanKneel],
				},
				FullBinding: {
					Property: { SetPose: ["LegsClosed"], Difficulty: 2 },
				},
				Link: {
					Property: { SetPose: ["LegsClosed"], Difficulty: 2 },
				},
				Mermaid: {
					Property: { SetPose: ["LegsClosed"], Difficulty: 4 },
				},
			},
		},
		SturdyLeatherBelts: {
			NoneTypeName: "One", ShowCount: 2, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemBootsToeTapeNPCReaction",
			Types: {
				One: {
				},
				Two: {
					Property: { Difficulty: 2 },
				},
			},
		},
		Zipties: {
			NoneTypeName: "ZipLegLight", ShowCount: 4, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemBootsToeTapeNPCReaction",
			Types: {
				ZipFrogtie: {
					Property: { SetPose: ["Kneel"], Block: ["ItemFeet"], Effect: ["ForceKneel"], Difficulty: 3 },
					Prerequisite: [NotSuspended, CanKneel],
				},
				ZipLegFull: {
					Property: { SetPose: ["LegsClosed"], Difficulty: 2 },
				},
				ZipLegLight: {
					Property: { SetPose: ["LegsClosed"], Difficulty: 1 },
				},
				ZipLegMedium: {
					Property: { SetPose: ["LegsClosed"], Difficulty: 2 },
				},
			},
		},
	},
	ItemMouth: {
		ClothGag: {
			NoneTypeName: "Small", ShowCount: 4, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ClothGag",
			Types: {
				Cleave: {
					Property: { Effect: ["BlockMouth", "GagLight"] },
				},
				OTM: {
					Property: { Effect: ["BlockMouth", "GagEasy"] },
				},
				OTN: {
					Property: { Effect: ["BlockMouth", "GagEasy"] },
				},
				Small: {
					Property: { Effect: ["BlockMouth", "GagVeryLight"] },
				},
			},
		},
		DildoPlug: {
			NoneTypeName: "Open", ShowCount: 2, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemMouthDildoPlugGag",
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
			NoneTypeName: "Rest", ShowCount: 3, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "MilkBottle",
			Types: {
				Chug: {
				},
				Raised: {
				},
				Rest: {
				},
			},
		},
		PlugGag: {
			NoneTypeName: "Open", ShowCount: 2, Unextend: true, SelectBeforeWear: true, ExtraPublish: true, DialogNpc: "ItemMouthPlugGag",
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

