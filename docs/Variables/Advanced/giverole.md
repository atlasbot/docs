# giverole [role] <user>

Give a user a role from the server, pretty self explanatory. `[role]` can be a role name or ID, `<user>` is optional and can be a username, user id, nickname or mention. If `<user>` is not provided, it will use the user in context (for example, the person who ran the command that the variable is apart of).

## Example

*Input*
```
{giverole;Humans} You've been added to the Humans role.
```
*Output*
```
You've been added to the Humans role.
```
!!! note
    This would give the user the "Humans" role, then return nothing and say the sentence.

## Supports

* [Custom commands](/Modules/custom_commands/)
* [Join messages](/Modules/join_leave_messages/)
* [Level-up messages](/Modules/levels/)
