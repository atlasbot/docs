# set (key\> <value\>

Set a variable to be used later. This is not persistent, so if you run a command that sets X to something, and another that gets X, the second one won't know what you're talking about.

You may also be interested in [get](/Variables/Advanced/get/)

!!! note
    This variable is **not persistent**. That means, once a command has been run, any data saved will be lost. You can use [perset](/Variables/Advanced/perset/) and [perget](/Variables/Advanced/perget/) if you want persistent data.

## Example

### Input

```json
{set;x;oof}
{get;x}
```

### Output

```json
oof
```

## Supports

* [Custom commands](/Modules/custom_commands/)
* [Join and leave messages](/Modules/join_leave_messages/)
* [Level-up messages](/Modules/levels/)
