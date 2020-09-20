"use strict"

var AssetTypeInfo = {
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
			Types: ["Rest", "Raised", "Chug"],
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
