# mention.user <user mention/id/username/nickname/tag>

Mentions a user. `user` can be a id, nickname or username. This searches for members in the guild, so for leave messages this won't be a great idea.

If no user is provided, it will fall back to whoever called the command, levelled up or joined.

!!! note
    Atlas will try and pick up regular user, channel and role mentions, so you shouldn't ever have to use this variable. Just tag whatever you're after regularly, for example `#channelname` and Atlas will convert it to a channel mention.

## Example

### Input

```json
{mention.user;Sylver}
```

### Output

```json
@Sylver#1058
```

## Supports

* [Custom commands](/Modules/custom_commands/)
* [Join and leave messages](/Modules/join_leave_messages/)
* [Level-up messages](/Modules/levels/)
