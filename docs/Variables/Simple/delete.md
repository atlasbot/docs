# delete

Delete the original message that caused the... "thing". For custom commands, this deletes the invocation message, for level up messages it deletes the message that caused the level-up.

## Example

*Input*
```
{delete} *boop*
```
*Output*
```
*boop*
```
!!! note
    This would have deleted the message that called it, but of course you can't see that here.

## Supports

* [Custom commands](/Modules/custom_commands/)
* [Level-up messages](/Modules/levels/)
