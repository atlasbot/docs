Actions are like custom commands on steroids. Actions allow you to do something every x minutes, or create a custom command, or a do a ton of other things relatively easily.

## Triggers

Each action has a trigger. Triggers can be things like adding a certain emoji to a message or running a command.

### Trigger Types

#### COMMAND

Triggers when someone has a message with a prefix and label matching the server's prefix and action content.

#### KEYWORD

Triggers when a message is created including the trigger content.

#### INTERVAL

Triggers at a configurable interval. Whoever last updated the action will be the user in context. All command tags and their commands will run on behalf of this user.

#### MESSAGE REACTION ADD

Triggers when the trigger content is added to a message as a reaction.

#### MESSAGE REACTION REMOVE

Triggers when the trigger content is removed from a message as a reaction.

#### MESSAGE CREATE

Triggers when a message is created (optionally in a specific channel).

#### MEMBER JOIN

Triggers when a member joins your server.

#### MEMBER LEAVE

Triggers when a member leaves your server.

## Restrictions

Most triggers support role and channel restrictions. These allow you to prevent users with a role or in a channel from using your action or whitelist your action so only a group or channel can use your action.

## Sub-actions

Sub actions are what the action does when it's triggered. The content of each sub-action will be evaluated and supports the full suite of tags.
