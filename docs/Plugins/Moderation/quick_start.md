# Moderation Quick Start
The moderation plugin allows you, or anyone with access to your dashboard to create, delete, and edit filters, logs, and much more. 

## Logs

#### Moderation Logs
Moderation logs keep track of who has been punished in your guild by staff members. This includes warns, mutes, kicks, and bans. Its easy to set up, just create a channel in your guild that you wish the messages to be sent to, then select that channel under the **Moderation Logs** subcategory on your dashboard.

#### Action Logs
Action logs keep track of everything that mod logs don't including message edits, message deletions, role creations, role deletions, role assignments, and more. this one is just as easy to set up. Create a channel in your guild that you wish the messages to be sent to, then select that channel under the **Action Logs** subcategory on your dashboard.

#### Error Logs
We've been told this is supposed to do something eventually, but we're still waiting for that... ¯\\\_(ツ)_/¯

## Filters

#### Capitalization
Governs what percentage of a user's message can be capital letters before the auto-mod takes action. The default threshold is `75%`. So if this filter is enabled, this message: `I LikE DogS`, would not trigger the filter because the ratio of capital letters is under 75%. However this message: `I lIKE dOGS` is over the 75% threshold, so the auto-mod would take the appropriate action you set for it.

#### Cursing
Controls whether users in your guild can use specified vulgar words. If this filter is enabled, the auto-mod will take immediate action. You can also set which types of vulgar speech you would like to filter: **Insult**, **Sexual**, or **Discriminatory**. The complete list of filtered words can be found [here](https://raw.githubusercontent.com/raymondjavaxx/swearjar-node/master/lib/config/en_US.json).

#### Emoji
Sets the maximum amount of emojis users can send in one message without the auto-mod taking action.

#### Invites
Regulates if users can send `discord.gg` or `discordapp.com` invite links to your server.

#### Links
Controls whether users can send URL links in your server. If the filter is enabled but you only want certain links to be sent in your guild, you can also include links in the **Hostname Exclusions** box, which will whitelist them from the filter.

#### Mentions
Sets the maximum amount of user mentions a person can have within one message without the auto-mod taking action.

#### Phrases
Blacklist specific phrases from being spoken in your server by adding them to this filter. Just punch the phrase in the text box and press enter.

#### Spam
Set the spam filter for your guild. The default ratio is `5 messages` every `4 seconds`.  If users exceed that ratio, the auto-mod will take the appropriate action.

## Flags

#### Sanction Bots
Sets whether Atlas should apply the selected filter settings to other non-user bots in your guild.

#### Sanction Moderators
Sets whether Atlas should apply the selected filter settings to users in your guild with at least `Manage Messages` permissions.
