# perget [key\]

Gets a persistent value from a key. Essentially the same as "get" but it can get persistent values from the persistent map. You may also be interested in [perset](/Variables/Advanced/perset/).

!!! note
    Each guild gets one map that everything is thrown into. The map is only saved at the end of each command for performance reasons.

## Example

### Input

```json
{perset;test;wew} {perget;test}
```

### Output

```json
wew
```

## Supports

* [Custom commands](/Modules/custom_commands/)
* [Join and leave messages](/Modules/join_leave_messages/)
* [Level-up messages](/Modules/levels/)
