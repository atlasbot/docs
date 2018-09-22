# mention.channel <channel mention/id/name>

Mentions a channel. Uses fuzzy matching to find it based on what you input.

!!! note
    Atlas will try and pick up regular user, channel and role mentions, so you shouldn't ever have to use this variable. Just tag whatever you're after regularly, for example `#channelname` and Atlas will convert it to a channel mention.

## Example

### Input

```json
{mention.channel;general}
```

### Output

```json
#general
```

## Supports

* [Custom commands](/Modules/custom_commands/)
* [Join and leave messages](/Modules/join_leave_messages/)
* [Level-up messages](/Modules/levels/)
