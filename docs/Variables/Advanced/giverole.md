# giverole [role]

Give a user a role from the server. **Be careful with this variable** as it utilizes Atlas' famously terrible fuzzy searching, meaning if you enter a role name that is then deleted, Atlas will try and find another role that matches it. E.g, **if you have a role named "Ad"** which for whatever reason you want to give to a user, and it is deleted, **then you have another role with administrator permissions called "Administrator"**, **when that "Ad" is deleted Atlas will find the closest match, which would be Administrator**. It's a worst case scenario and may be changed in the future, but for now just be really, really careful.

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
