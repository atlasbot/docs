# perset [key\] [value]

Sets a persistent key to a value. Essentially the same as "set" but it's persistent between commands. You may also be interested in [perget](/Variables/Advanced/perget/).

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
