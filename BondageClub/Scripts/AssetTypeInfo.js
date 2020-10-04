"use strict"

var AssetTypeInfo = {
	ItemEars: {
		BluetoothEarbuds: { CopyFrom: { Group: "ItemEars", Asset: "HeadphoneEarPlugs" } },
		HeadphoneEarPlugs: {
			NoneTypeName: "Off", DrawType: "Images", ShowCount: 3, Unextend: true, TypeLocking: false, SelectBeforeWear: true, TypedName: false, ExtraPublish: true, DialogNpc: "ItemBootsToeTapeNPCReaction",
			Types: {
				Off: {
					Property: { Effect: [] },
				},
				Light: {
					Property: { Effect: ["DeafLight"] },
				},
				Heavy: {
					Property: { Effect: ["DeafHeavy"] },
				},
			},
		},
	},
	ItemHead: {
		DuctTape: {
			NoneTypeName: "Double", DrawType: "Images", ShowCount: 3, Unextend: true, TypeLocking: false, SelectBeforeWear: true, TypedName: false, ExtraPublish: true, DialogNpc: "ItemBootsToeTapeNPCReaction",
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
			NoneTypeName: "Blindfold", DrawType: "Images", ShowCount: 2, Unextend: true, TypeLocking: false, SelectBeforeWear: true, TypedName: false, ExtraPublish: true, DialogNpc: "ItemBootsToeTapeNPCReaction",
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
	ItemMouth: {
		ClothGag: {
			NoneTypeName: "Small", DrawType: "Images", ShowCount: 4, Unextend: true, TypeLocking: false, SelectBeforeWear: true, TypedName: false, ExtraPublish: true, DialogNpc: "ClothGag",
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
		CupholderGag: {
			NoneTypeName: "NoCup", DrawType: "TextOnly", ShowCount: 3, Unextend: true, TypeLocking: false, SelectBeforeWear: false, TypedName: false, ExtraPublish: true, DialogNpc: "ItemMouthCupholderGag",
			Types: ["NoCup", "Cup", "Tip"],
			DynamicAllowType: Item => { const Type = InventoryItemGetType(Item); return Item.Asset.AllowType.filter(T => (T == Type) || (Player.CanInteract() && (Type == "Cup" || T == "Cup"))); },
		},
		DildoPlugGag: {
			NoneTypeName: "Open", DrawType: "Images", ShowCount: 2, Unextend: true, TypeLocking: false, SelectBeforeWear: true, TypedName: false, ExtraPublish: true, DialogNpc: "ItemMouthDildoPlugGag",
			Types: {
				Open: {
					Property: { Effect: ["GagEasy", "OpenMouth"] },
				},
				Plug: {
					Property: { Effect: ["BlockMouth", "GagTotal2"] },
				},
			},
		},
		DuctTape: {
			NoneTypeName: "Small", DrawType: "Images", ShowCount: 5, Unextend: true, TypeLocking: false, SelectBeforeWear: true, TypedName: false, ExtraPublish: true, DialogNpc: "ItemMouthDuctTape",
			Types: {
				Small: {
					Property: { Effect: ["BlockMouth", "GagVeryLight"] },
				},
				Crossed: {
					Property: { Effect: ["BlockMouth", "GagLight"] },
				},
				Full: {
					Property: { Effect: ["BlockMouth", "GagEasy"] },
				},
				Double: {
					Property: { Effect: ["BlockMouth", "GagNormal"] },
				},
				Cover: {
					Property: { Effect: ["BlockMouth", "GagMedium"] },
				},
			},
		},
		MilkBottle: {
			NoneTypeName: "Rest", DrawType: "Images", ShowCount: 3, Unextend: true, TypeLocking: false, SelectBeforeWear: true, TypedName: false, ExtraPublish: true, DialogNpc: "MilkBottle",
			Types: ["Rest", "Raised", "Chug"],
		},
		PlugGag: {
			NoneTypeName: "Open", DrawType: "Images", ShowCount: 2, Unextend: true, TypeLocking: false, SelectBeforeWear: true, TypedName: false, ExtraPublish: true, DialogNpc: "ItemMouthPlugGag",
			Types: {
				Open: {
					Property: { Effect: ["GagMedium", "OpenMouth"] },
				},
				Plug: {
					Property: { Effect: ["BlockMouth", "GagTotal"] },
				},
			},
		},
		PumpGag: {
			NoneTypeName: "Empty", DrawType: "TextOnly", ShowCount: 5, Unextend: true, TypeLocking: false, SelectBeforeWear: false, TypedName: false, ExtraPublish: true, DialogNpc: "InventoryItemMouthPumpGagNPCReaction",
			PublishTypeTransform: "Increment",
			Types: {
				Empty: {
					Property: { Difficulty: 0, Effect: ["BlockMouth"] },
				},
				Light: {
					Property: { Difficulty: 2, Effect: ["BlockMouth", "GagLight"] },
				},
				Inflated: {
					Property: { Difficulty: 4, Effect: ["BlockMouth", "GagEasy"] },
				},
				Bloated: {
					Property: { Difficulty: 6, Effect: ["BlockMouth", "GagMedium"] },
				},
				Maximum: {
					Property: { Difficulty: 8, Effect: ["BlockMouth", "GagVeryHeavy"] },
				},
			},
		},
	},
	ItemNeckAccessories: {
		CollarNameTag: {
			NoneTypeName: "None", DrawType: "ManyTags", ShowCount: 0, Unextend: true, TypeLocking: true, SelectBeforeWear: true, TypedName: false, ExtraPublish: true, DialogNpc: "ItemNeckAccessories",
			Types: ["None", "Angel", "BadGirl", "BindMe", "Bitch", "Boobs", "Cupcake", "Devil", "Dom", "Free", "FuckMe", "GagMe", "Goddess", "GoodGirl", "HoldMe", "Jewel", "Love", "Maid", "Meat", "Miss", "Mummy", "Nice", "Needy", "Owned", "Precious", "Pudding", "Queen", "Slave", "Slut", "Sub", "Sweetie", "Taken", "Toy", "Useless", "UseMe", "Whore"],
			DynamicAllowType: Item => Item.Asset.AllowType.filter(Boolean),
			DynamicDictionary: (_, Item) => [{ Tag: "NameTagType", Text: InventoryItemGetType(Item) }],
		},
		CollarNameTagOval: {
			NoneTypeName: "None", DrawType: "ManyTags", ShowCount: 0, Unextend: true, TypeLocking: true, SelectBeforeWear: true, TypedName: false, ExtraPublish: true, DialogNpc: "ItemNeckAccessories",
			Types: ["None", "Babe", "Bandit", "Bimbo", "Bratty", "Chair", "Chaste", "Crazy", "Cumslut", "Cutie", "Damsel", "Doll", "EdgeMe", "Evil", "ForSale", "Greedy", "Happy", "Horny", "Kinky", "Lady", "LockMe", "Nude", "Nurse", "Nympho", "Painslut", "Pillow", "Punish", "Robber", "Sad", "Switch", "Table", "Ticklish", "Undress", "Victim", "Violent", "Worm", "AnalSlut", "ButtSlut"],
			DynamicAllowType: Item => Item.Asset.AllowType.filter(Boolean),
			DynamicDictionary: (_, Item) => [{ Tag: "NameTagType", Text: InventoryItemGetType(Item) }],
		},
		CollarNameTagPet: {
			NoneTypeName: "None", DrawType: "ManyTags", ShowCount: 0, Unextend: true, TypeLocking: true, SelectBeforeWear: true, TypedName: false, ExtraPublish: true, DialogNpc: "ItemNeckAccessories",
			Types: ["None", "Bunny", "Cat", "Dog", "Foxy", "Kitten", "Kitty", "Mochi", "Panda", "Pet", "PetMe", "Pixie", "Pony", "Puppy", "Racoon", "Sloth"],
			DynamicAllowType: Item => Item.Asset.AllowType.filter(Boolean),
			DynamicDictionary: (_, Item) => [{ Tag: "NameTagType", Text: InventoryItemGetType(Item) }],
		},
		CollarNameTagLover: {
			NoneTypeName: "None", DrawType: "ManyTags", ShowCount: 0, Unextend: true, TypeLocking: true, SelectBeforeWear: true, TypedName: false, ExtraPublish: true, DialogNpc: "ItemNeckAccessories",
			Types: ["None", "Cookie", "Feather", "Lover", "Muffin"],
			DynamicAllowType: Item => Item.Asset.AllowType.filter(Boolean),
			DynamicDictionary: (_, Item) => [{ Tag: "NameTagType", Text: InventoryItemGetType(Item) }],
		},
		CollarNameTagLivestock: {
			NoneTypeName: "None", DrawType: "ManyTags", ShowCount: 0, Unextend: true, TypeLocking: true, SelectBeforeWear: true, TypedName: false, ExtraPublish: true, DialogNpc: "ItemNeckAccessories",
			Types: ["None", "Animal", "BreedMe", "Cow", "Meat", "MilkMe", "Pig"],
			DynamicAllowType: Item => Item.Asset.AllowType.filter(Boolean),
			DynamicDictionary: (_, Item) => [{ Tag: "NameTagType", Text: InventoryItemGetType(Item) }],
		},
	},
}
