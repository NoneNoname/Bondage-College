
var Commands = [];
var CommandsKey = "/";
let CommandText = null;

/**
 * Loads the commands for the Player
 * @returns {void} - Nothing
 */
function CommandsLoad() {
    CommandCombine(CommonCommands);
    CommandsTranslate();
}

/**
 * Translates the help for commands
 * @returns {void} - Nothing
 */
function CommandsTranslate() {
    if (!CommandText) {
        CommandText = new TextCache();
        CommandText.fetchCsv = async () => {
            return Promise.resolve(Commands.map(C => [C.Tag, C.Description]));
        }
        CommandText.path = "Screens/Online/ChatRoom/Commands.csv";
    }
    else CommandText.buildCache();
}

/**
 * Fill the user input with the command
 * @param {string} command
 * @returns {void} - Nothing
 */
function CommandSet(command) {
    ElementValue("InputChat", CommandsKey + command + " ");
    ElementFocus("InputChat");
}

/**
 * Add a list of commands
 * @param {ICommand|ICommand[]} add - Commands to add
 * @returns {void} - Nothing
 */
function CommandCombine(add) {
    if (!add) return;
    if (!Array.isArray(add)) add = [add];
    Commands = Commands.filter(C => !add.some(A => A.Tag == C.Tag)).concat(add);
    Commands.sort((A, B) => (A.Tag > B.Tag) ? 1 : ((B.Tag > A.Tag) ? -1 : 0));
}

/**
 * Parse the user message
 * @param {string} msg
 * @returns {void} - Nothing
 */
function CommandParse(msg) {
    if (msg.indexOf(CommandsKey) == 0) {
        CommandExecute(msg);
    } else if (msg.indexOf("*") == 0) {
        ChatRoomSendEmote(msg);
        ElementValue("InputChat", "");
    } else {
        if (ChatRoomTargetMemberNumber == null) ServerSend("ChatRoomChat", { Content: msg, Type: "Chat" });
        else {
            ServerSend("ChatRoomChat", { Content: msg, Type: "Whisper", Target: ChatRoomTargetMemberNumber });
            let TargetName = "";
            for (let C = 0; C < ChatRoomCharacter.length; C++)
                if (ChatRoomTargetMemberNumber == ChatRoomCharacter[C].MemberNumber)
                    TargetName = ChatRoomCharacter[C].Name;

            const div = document.createElement("div");
            div.setAttribute('class', 'ChatMessage ChatMessageWhisper');
            div.setAttribute('data-time', ChatRoomCurrentTime());
            div.setAttribute('data-sender', Player.MemberNumber.toString());
            div.innerHTML = TextGet("WhisperTo") + " " + TargetName + ": " + msg;

            const Refocus = document.activeElement.id == "InputChat";
            const ShouldScrollDown = ElementIsScrolledToEnd("TextAreaChatLog");
            if (document.getElementById("TextAreaChatLog") != null) {
                document.getElementById("TextAreaChatLog").appendChild(div);
                if (ShouldScrollDown) ElementScrollToEnd("TextAreaChatLog");
                if (Refocus) ElementFocus("InputChat");
            }
        }
        ElementValue("InputChat", "");
    }
}

/**
 * Prints out the commands with tags that include low
 * @param {string} low - lower case search keyword for tags
 * @returns {void} - Nothing
 */
function CommandHelp(low) {
    ChatRoomSendLocal(TextGet("CommandHelp").replace('KeyWord', low))
    Commands
        .filter(C => low == null || low == "" || C.Tag.includes(low))
        .filter(C => C.Prerequisite == null || C.Prerequisite())
        .forEach(C => ChatRoomSendLocal("<strong onclick='window.CommandSet(\"" + C.Tag + "\")'>" + CommandsKey + C.Tag + "</strong>" + CommandText.get(C.Tag)));
}

/**
 * Finds command and executes it from the message
 * @param {string} msg - User input
 * @returns {void} - Nothing
 */
function CommandExecute(msg) {
    const low = msg.toLowerCase();
    let C = Commands.filter(C => low.indexOf(CommandsKey + C.Tag) == 0);
    C = C[0] && C.reduce(function (a, b) { return a.length > b.length ? a : b; });
    if (C && C.Reference) C = Commands.find(D => D.Tag == C.Reference);
    if (C == null) {
        ElementValue("InputChat", CommandsKey + "invalid command: no such command");
        return;
    }
    if (C.Prerequisite && !C.Prerequisite()) {
        ElementValue("InputChat", CommandsKey + "invalid command: prerequisite did not met");
        return;
    }
    C.Action(low.substring(C.Tag.length + 2), msg);
    if (C.Clear == null || C.Clear) {
        ElementValue("InputChat", "");
        ElementFocus("InputChat");
    }
}

/**
 * @type {ICommand[]}
 */
const CommonCommands = [
    {
        Tag: 'dice',
        Description: ' [Number: 6..1000], to cast a random dice roll',
        Action: args => {
            // The player can roll X dice of Y faces, using XdY.  If no size is specified, a 6 sided dice is assumed
            let DiceNumber = 0;
            let DiceSize = 0;
            if (/(^\d+)[dD](\d+$)/.test(args)) {
                const Roll = /(^\d+)[dD](\d+$)/.exec(args);
                DiceNumber = (!Roll) ? 1 : parseInt(Roll[1]);
                DiceSize = (!Roll) ? 6 : parseInt(Roll[2]);
                if ((DiceNumber < 1) || (DiceNumber > 100)) DiceNumber = 1;
            } else if (/(^\d+$)/.test(args)) {
                const Roll = /(^\d+)/.exec(args);
                DiceNumber = 1;
                DiceSize = (!Roll) ? 6 : parseInt(Roll[1]);
            }

            // If there's at least one dice to roll
            if (DiceNumber > 0) {
                if ((DiceSize < 2) || (DiceSize > 100)) DiceSize = 6;
                let CurrentRoll = 0;
                const Result = [];
                let Total = 0;
                while (CurrentRoll < DiceNumber) {
                    const Roll = Math.floor(Math.random() * DiceSize) + 1
                    Result.push(Roll);
                    Total += Roll;
                    CurrentRoll++;
                }
                msg = "ActionDice";
                const Dictionary = [];
                Dictionary.push({ Tag: "SourceCharacter", Text: Player.Name });
                Dictionary.push({ Tag: "DiceType", Text: DiceNumber.toString() + "D" + DiceSize.toString() });
                if (DiceNumber > 1) {
                    Result.sort((a, b) => a - b);
                    Dictionary.push({ Tag: "DiceResult", Text: Result.toString() + " = " + Total.toString() });
                } else if (DiceNumber == 1) Dictionary.push({ Tag: "DiceResult", Text: Total.toString() });
                if (msg != "") ServerSend("ChatRoomChat", { Content: msg, Type: "Action", Dictionary: Dictionary });
            }
        }
    },
    {
        Tag: 'coin',
        Description: ', to throw a coin',
        Action: () => {
            const Heads = (Math.random() >= 0.5);
            const Dictionary = [
                { Tag: "SourceCharacter", Text: Player.Name },
                { Tag: "CoinResult", TextToLookUp: Heads ? "Heads" : "Tails" }];
            ServerSend("ChatRoomChat", { Content: "ActionCoin", Type: "Action", Dictionary: Dictionary });
        }
    },
    {
        Tag: 'friendlistadd',
        Description: ' [MemberNumber], add to friendlist',
        Action: args => ChatRoomListManipulation(Player.FriendList, null, args)
    },
    {
        Tag: 'friendlistremove',
        Description: ' [MemberNumber], remove from friendlist',
        Action: args => ChatRoomListManipulation(null, Player.FriendList, args)
    },
    {
        Tag: 'ghostadd',
        Description: ' [MemberNumber], add to ghostlist',
        Action: args => ChatRoomListManipulation(Player.GhostList, null, args)
    },
    {
        Tag: 'ghostremove',
        Description: ' [MemberNumber], remove from ghostlist',
        Action: args => ChatRoomListManipulation(null, Player.GhostList, args)
    },
    {
        Tag: 'whitelistadd',
        Description: ' [MemberNumber], add to whitelist',
        Action: args => ChatRoomListManipulation(Player.WhiteList, Player.BlackList, args)
    },
    {
        Tag: 'whitelistremove',
        Description: ' [MemberNumber], remove from whitelist',
        Action: args => ChatRoomListManipulation(null, Player.WhiteList, args)
    },
    {
        Tag: 'blacklistadd',
        Description: ' [MemberNumber], add to blacklist',
        Action: args => ChatRoomListManipulation(Player.BlackList, Player.WhiteList, args)
    },
    {
        Tag: 'blacklistremove',
        Description: ' [MemberNumber], remove from blacklist',
        Action: args => ChatRoomListManipulation(null, Player.BlackList, args)
    },
    {
        Tag: 'showblack',
        Description: ', show blacklist',
        Action: () => ChatRoomSendLocal('Blacklist: ' + JSON.stringify(Player.BlackList))
    },
    {
        Tag: 'showwhite',
        Description: ', show whitelist',
        Action: () => ChatRoomSendLocal('Whitelist: ' + JSON.stringify(Player.WhiteList))
    },
    {
        Tag: 'showghost',
        Description: ', show ghostlist',
        Action: () => ChatRoomSendLocal('Ghostlist: ' + JSON.stringify(Player.Ghostlist))
    },
    {
        Tag: 'showfriends',
        Description: ', show friendlist',
        Action: () => ChatRoomSendLocal('Blacklist: ' + JSON.stringify(Player.FriendList))
    },
    {
        Tag: 'ban',
        Description: ' [MemberNumber], ban user',
        Prerequisite: () => ChatRoomPlayerIsAdmin(),
        Action: args => ChatRoomAdminChatAction("Ban", args)
    },
    {
        Tag: 'unban',
        Description: ' [MemberNumber], remove ban',
        Prerequisite: () => ChatRoomPlayerIsAdmin(),
        Action: args => ChatRoomAdminChatAction("Unban", args)
    },
    {
        Tag: 'kick',
        Description: ' [MemberNumber], kick user',
        Prerequisite: () => ChatRoomPlayerIsAdmin(),
        Action: args => ChatRoomAdminChatAction("Kick", args)
    },
    {
        Tag: 'promote',
        Description: ' [MemberNumber], promote user to room administrator',
        Prerequisite: () => ChatRoomPlayerIsAdmin(),
        Action: args => ChatRoomAdminChatAction("Promote", args)
    },
    {
        Tag: 'demote',
        Description: ' [MemberNumber], demote user from room administrator',
        Prerequisite: () => ChatRoomPlayerIsAdmin(),
        Action: args => ChatRoomAdminChatAction("Demote", args)
    },
    {
        Tag: 'me',
        Description: ' [Message], send emote: "<i>*[PlayerName] Message*</i>", alternative start message with *"',
        Action: (_, msg) => ChatRoomSendEmote(msg)
    },
    {
        Tag: 'action',
        Description: ' [Message], send emote: "<i>*Message*</i>", alternative start message with **',
        Action: (_, msg) => ChatRoomSendEmote(msg)
    },
    {
        Tag: 'invalid',
        Description: ', do nothing',
        Action: () => { }
    },
    {
        Tag: CommandsKey,
        Description: '[Message], send "/Message"',
        Action: (_, msg) => { ServerSend("ChatRoomChat", { Content: msg.substring(1), Type: "Chat" }); }
    },
    {
        Tag: 'help',
        Description: ' [Name?], print help for commands where Name is prefix of command',
        Action: args => CommandHelp(args)
    },
    {
        Tag: 'afk',
        Description: ', Set AFK emote',
        Action: () => CharacterSetFacialExpression(Player, "Emoticon", "Afk")
    },
    {
        Tag: 'beep',
        Description: ' [MemberNumber], sends beep to someone',
        Action: arg => {
            const T = parseInt(arg);
            if (isFinite(T) && T > 0 && T < ChatRoomCharacter.length) {
                const C = ChatRoomCharacter.find(C => C.MemberNumber == T);
                FriendListBeep(T, (C && C.Name) || ("#" + T.toString()));
            }
        }
    },
];

/**
 * @typedef ICommand
 * @property {string} Tag - Key for the command
 * @property {string?} Description - Help for the command
 * @property {(args: string, msg: string) => void} Action - "/Tag args" = msg
 * @property {(() => boolean)?} [Prerequisite] - Must return true or be null before the action can be executed
 */
