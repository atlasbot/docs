# responder.send [channel] [message]

Sends a message to a certain channel.

!!! note
    Atlas uses the fuzzy matcher to search for the channel, so be careful. If the target channel was deleted, Atlas will try and find the second best channel that matches. Using an ID here is strongly suggested, then if a channel is deleted Atlas won't find the channel and won't send anything, just incase.

## Example

*Input in channel 'test'*
```
{responder.send;general;lol}
```
*Output in channel 'general'*
```
lol
```

## Supports

* [Custom commands](/Modules/custom_commands/)
* [Join and leave messages](/Modules/join_leave_messages/)
* [Level-up messages](/Modules/levels/)
