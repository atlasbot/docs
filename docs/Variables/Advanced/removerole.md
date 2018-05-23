# removerole [role]

Remove a users role. This uses a fuzzy matching algorithm, so be careful not to remove roles you don't want by deleting the target role.

## Example

*Input*
```
{removerole;Humans} You've been removed from the Humans role.
```
*Output*
```
You've been removed from the Humans role
```
!!! note
    This would remove the "Humans" role from the user, then return nothing and say the sentence.

## Supports

* [Custom commands](/custom_commands/)
* [Join messages](/join_leave_messages/)
* [Level-up messages](/levels/)
