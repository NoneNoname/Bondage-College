"use strict"

/** @typedef {'AssetFamily'} IAssetFamily */

/**
 * @typedef {Object} AssetGroup
 * @property {IAssetFamily} Family
 * @property {string} Name
 * @property {string} Description
 * @property {string} ParentGroupName
 * @property {('Appearance'|'Item')} Category
 * @property {boolean} IsDefault
 * @property {boolean} IsRestraint
 * @property {boolean} AllowNone
 * @property {boolean} AllowColorize
 * @property {boolean} AllowCustomize
 * @property {boolean} KeepNaked
 * @property {string[]} ColorSchema
 * @property {string} ParentSize
 * @property {string} ParentColor
 * @property {boolean} Clothing
 * @property {boolean} Underwear
 * @property {number[][]} Zone
 * @property {string[]} SetPose
 * @property {string[]} AllowPose
 * @property {string[]} AllowExpression
 * @property {string[]} Effect
 * @property {number} DrawingPriority
 * @property {number} DrawingLeft
 * @property {number} DrawingTop
 * @property {boolean} DrawingFullAlpha
 * @property {boolean} DrawingBlink
 * @property {string} MirrorGroup
 */

/**
 * An object defining a drawable layer of an asset
 * @typedef {Object} AssetLayer
 * @property {string} Name - the name of the layer - may be null if the asset only contains a single default layer
 * @property {boolean} AllowColorize - whether or not this layer can be colored
 * @property {string} [CopyLayerColor] - if not null, specifies that this layer should always copy the color of the named layer
 * @property {string} [ColorGroup] - specifies the name of a color group that this layer belongs to. Any layers within the same color group
 * can be colored together via the item color UI
 * @property {boolean} HideColoring - whether or not this layer can be coloured in the colouring UI
 * @property {string[]} [AllowTypes] - A list of allowed extended item types that this layer permits - the layer will only be drawn if
 * the item type matches one of these types. If null, the layer is considered to permit all extended types.
 * @property {boolean} HasType - whether or not the layer has separate assets per type. If not, the extended type will not be included in
 * the URL when fetching the layer's image
 * @property {string} [ParentGroupName] - The name of the parent group for this layer. If null, the layer has no parent group. If
 * undefined, the layer inherits its parent group from it's asset/group.
 * @property {string[]} [OverrideAllowPose] - An array of poses that this layer permits. If set, it will override the poses permitted
 * by the parent asset/group.
 * @property {number} Priority - The drawing priority of this layer. Inherited from the parent asset/group if not specified in the layer
 * definition.
 * @property {Asset} Asset - The asset that this layer belongs to
 * @property {number} ColorIndex - The coloring index for this layer
 */

/**
 * An object defining a group of alpha masks to be applied when drawing an asset layer
 * @typedef AlphaDefinition
 * @property {string[]} [Group] - A list of the group names that the given alpha masks should be applied to. If empty or not present, the
 * alpha masks will be applied to every layer underneath the present one.
 * @property {string[]} [Pose] - A list of the poses that the given alpha masks should be applied to. If empty or not present, the alpha
 * masks will be applied regardless of character pose.
 * @property {number[][]} Masks - A list of alpha mask definitions. A definition is a 4-tuple of numbers defining the top left coordinate of
 * a rectangle and the rectangle's width and height - e.g. [left, top, width, height]
 */

/**
 * @typedef {Object} AssetBonus
 * @property {string} Type
 * @property {number} Factor
 */

/**
* @typedef {Object} ExpressionTrigger
* @property {string} Group
* @property {string} Name
* @property {number} Timer
*/

/**
 * @typedef {Object} Asset
 * @property {string} Name
 * @property {string} Category
 * @property {string} Description
 * @property {AssetGroup} Group
 * @property {string} ParentItem
 * @property {boolean} Enable
 * @property {boolean} Visible
 * @property {boolean} Wear
 * @property {string} BuyGroup
 * @property {string[]} PrerequisiteBuyGroups
 * @property {string[]} Effect
 * @property {AssetBonus} Bonus
 * @property {string[]} Block
 * @property {string[]} Expose
 * @property {string[]} Hide
 * @property {string[]} HideItem
 * @property {string[]} Require
 * @property {string[]} SetPose
 * @property {string[]} AllowPose
 * @property {number} Value
 * @property {number} Difficulty
 * @property {boolean} SelfBondage
 * @property {boolean} SelfUnlock
 * @property {boolean} Random
 * @property {boolean} RemoveAtLogin
 * @property {number} WearTime
 * @property {number} RemoveTime
 * @property {number} RemoveTimer
 * @property {number} DrawingPriority
 * @property {number} HeightModifier
 * @property {number} MaxTimer
 * @property {number[][]} Alpha
 * @property {string} Prerequisite
 * @property {boolean} Extended
 * @property {boolean} AllowLock
 * @property {boolean} IsLock
 * @property {boolean} OwnerOnly
 * @property {boolean} LoverOnly
 * @property {ExpressionTrigger[]} ExpressionTrigger
 * @property {AssetLayer[]} Layer
 * @property {string[]} AllowEffect
 * @property {string[]} AllowBlock
 * @property {string[]} AllowType
 * @property {any[]} RemoveItemOnRemove
 * @property {boolean} IgnoreParentGroup
 * @property {boolean} IsRestraint
 * @property {string} DynamicGroupName
 * @property {() => string} DynamicDescription
 * @property {() => string} DynamicPreviewIcon
 * @property {() => boolean} DynamicAllowInventoryAdd
 * @property {() => any} DynamicExpressionTrigger
 */

/**
 * An ItemBundle is a minified version of the normal Item
 * @typedef {object} ItemBundle
 * @property {string} Group
 * @property {string} Name
 * @property {number} [Difficulty]
 * @property {string | string[]} [Color]
 * @property {*} [Property]
 */

/**
 * @typedef {object} Pose
 * @property {string} Name
 * @property {'BodyUpper' | 'BodyLower'} [Category]
 * @property {true} [AllowMenu]
 * @property {{ Height: number; Priority: number; }} [OverrideHeight]
 * @property {string[]} [Hide]
 * @property {{ Group: string; X: number; Y: number; }[]} [MovePosition]
 */

/**
 * An item is a pair of asset and its dynamic properties that define a worn asset.
 * @typedef {object} Item
 * @property {Asset} Asset
 * @property {string|string[]} [Color]
 * @property {number} [Difficulty]
 * @property {*} [Property]
 */

/**
 * @typedef {Object} Skill
 * @property {string} Type
 * @property {number} Level
 * @property {number} Progress
 */

/**
 * @typedef {Object} Reputation
 * @property {string} Type
 * @property {number} Value
 */

/**
 * @typedef Ownership
 * @property {number} MemberNumber
 * @property {string} Name
 */

/**
 * @typedef Lovership
 * @property {number} MemberNumber
 * @property {string} Name
 */

/**
 * @typedef {Object} Character
 * @property {number} ID
 * @property {string} Name
 * @property {IAssetFamily} AssetFamily
 * @property {string} AccountName
 * @property {string} Owner
 * @property {string} Lover
 * @property {number} Money
 * @property {any[]} Inventory
 * @property {Item[]} Appearance
 * @property {string} Stage
 * @property {string} CurrentDialog
 * @property {any[]} Dialog
 * @property {Reputation[]} Reputation
 * @property {Skill[]} Skill
 * @property {string[]} Pose
 * @property {string[]} Effect
 * @property {AssetGroup} FocusGroup
 * @property {HTMLCanvasElement} Canvas
 * @property {HTMLCanvasElement} CanvasBlink
 * @property {boolean} MustDraw
 * @property {number} BlinkFactor
 * @property {boolean} AllowItem
 * @property {any[]} BlockItems
 * @property {any[]} LimitedItems
 * @property {number[]} WhiteList
 * @property {number} HeightModifier
 * @property {number} [MemberNumber]
 * @property {number} [ItemPermission]
 * @property {Ownership} [Ownership]
 * @property {Lovership[]} [Lovership]
 * @property {() => boolean} CanTalk
 * @property {() => boolean} CanWalk
 * @property {() => boolean} CanKneel
 * @property {() => boolean} CanInteract
 * @property {() => boolean} CanChange
 * @property {() => boolean} IsProne
 * @property {() => boolean} IsRestrained
 * @property {() => boolean} IsBlind
 * @property {() => boolean} IsEnclose
 * @property {() => boolean} IsChaste
 * @property {() => boolean} IsVulvaChaste
 * @property {() => boolean} IsBreastChaste
 * @property {() => boolean} IsEgged
 * @property {() => boolean} IsOwned
 * @property {() => boolean} IsOwnedByPlayer
 * @property {() => boolean} IsOwner
 * @property {() => boolean} IsKneeling
 * @property {() => boolean} IsNaked
 * @property {() => boolean} IsDeaf
 * @property {() => boolean} HasNoItem
 * @property {() => boolean} IsLoverOfPlayer
 * @property {(MembersOnly?: boolean) => (number | string)[]} GetLoversNumbers
 * @property {string[]} AllowedActivePose
 * @property {any[]} HiddenItems
 * @property {number} HeightRatio
 * @property {boolean} HasHiddenItems
 * @property {(eyesOnly?: boolean) => number} GetBlindLevel
 * @property {() => boolean} IsLocked
 * @property {() => boolean} IsMounted
 * @property {() => boolean} IsPlugged
 * @property {() => boolean} IsShackled
 * @property {() => boolean} IsSlow
 * @property {() => boolean} IsMouthBlocked
 * @property {() => boolean} IsMouthOpen
 * @property {() => boolean} IsVulvaFull
 * @property {(memberNumber: number) => boolean} IsOwnedByMemberNumber
 * @property {(C: Character) => boolean} IsLover
 * @property {(memberNumber: number) => boolean} IsLoverOfMemberNumber
 * @property {() => number} GetDeafLevel
 * @property {() => boolean} IsLoverPrivate
 * @property {() => boolean} IsEdged
 * @property {() => boolean} IsNpc
 * @property {() => number} GetDifficulty
 * @property {() => boolean} IsInverted
 * @property {(Pose: string) => boolean} CanChangeToPose
 * @property {() => number} GetClumsiness
 */