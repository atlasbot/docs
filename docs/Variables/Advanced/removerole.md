# removerole [role]

Remove a users role. This uses a fuzzy matching algorithm, so be careful not to remove roles you don't want by deleting the target role.

## Example

### Input

```json
{removerole;Humans} You've been removed from the Humans role.
```

### Output

```json
You've been removed from the Humans role
```

!!! note
    This would remove the "Humans" role from the user, then return nothing and say the sentence.

## Supports

* [Custom commands](/Modules/custom_commands/)
* [Join messages](/Modules/join_leave_messages/)
* [Level-up messages](/Modules/levels/)
