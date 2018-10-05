# Running Commands

Each command has it's own variable. To run any command, do `{a!<command name}` as a variable. For example, to run `help` as a variable, you would enter `{a!help}`.

Arguments must be seperated via `;`, for example `{a!command;arg1;arg2}`, which would be the same as running `a!command arg1 arg2`

⚠️ Warning: Command variables do not support custom prefixes or aliases.

## Input

```json
{a!say;woohoo!;it;works.}
```

### Output

![Output](../img/grNin51F.png)

## Supports

* [Custom commands](../Modules/Modules/custom_commands/)
