# responder.send [channel] [message]

Sends a message to a certain channel.

!!! note
    This does not currently support forwarding commands to other channels. If you'd like that, feel free to come into our [support server](https://atlasbot.xyz/support) and ask in the suggestions channel.

## Example

### Input in channel 'test'

```json
{responder.send;general;lol}
```

### Output in channel 'general'

```json
lol
```

## Supports

* [Custom commands](/Modules/custom_commands/)
* [Join and leave messages](/Modules/join_leave_messages/)
* [Level-up messages](/Modules/levels/)
