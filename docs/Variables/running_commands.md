# Running Commands

Each command has it's own variable. To run any command, do `{a!<command name}` as a variable. For example, to run `help` as a variable, you would enter `{a!help}`.

Arguments must be seperated via `;`, for example `{a!command;arg1;arg2}`, which would be the same as running `a!command arg1 arg2`

!!! warning
    Command variables do not support aliases as of 03/08/2017.

### Input

```json
{a!say;woohoo!;it;works.}
```

### Output

![Output](/img/grNin51F.png)

## Supports

* [Custom commands](/Modules/Modules/custom_commands/)
* [Join messages](/Modules/join_leave_messages/)
* [Level-up messages](/Modules/levels/)