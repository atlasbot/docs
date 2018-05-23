# user.nickname

Returns the user's nickname, if they don't have one it will fall back to their username.

## Example

*Input*
```
Hello {user.nickname}!
```
*Output*
```
Hello definitely_not_sylver!
```
!!! note
    This assumes the user has a nickname in the guild that is `definitely_not_sylver` while their real username is `Sylver`

## Supports

* [Custom commands](/Modules/Modules/custom_commands/)
* [Join messages](/Modules/join_leave_messages/)
* [Level-up messages](/Modules/levels/)
