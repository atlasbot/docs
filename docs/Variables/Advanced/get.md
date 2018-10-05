# get [key\]

Gets a variable from storage. You may also be interested in [set](/Variables/Advanced/set/).

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
