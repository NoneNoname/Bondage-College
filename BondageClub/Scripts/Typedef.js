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
 */

/**
 * @typedef {Object} AssetLayer
 * @property {string} Name
 * @property {boolean} AllowColorize
 * @property {string[]} AllowTypes
 * @property {boolean} HasExpression
 * @property {boolean} HasType
 * @property {string} NewParentGroupName
 * @property {string[]} OverrideAllowPose
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
 * @property {() => string} DynamicDescription
 * @property {() => string} DynamicPreviewIcon
 * @property {() => boolean} DynamicAllowInventoryAdd
 * @property {() => any} DynamicExpressionTrigger
 */

/**
 * @typedef {Object} Pose
 * @property {string} Name
 * @property {number} OverrideHeight
 * @property {string[]} Hide
 */

/**
 * An item is a pair of asset and its dynamic properties that define a worn asset.
 * @typedef {Object} Item
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
 * @property {number} MemberNumber
 * @property {number} ItemPermission
 * @property {Ownership} Ownership
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
 * @property {() => number[]} GetLoversNumbers
 */