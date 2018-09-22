# delete

Delete the original message that invoked the tag. For custom commands, this deletes the invocation message, for level up messages it deletes the message that caused the level-up.

## Example

### Input

```json
{delete} *boop*
```

### Output

```json
*boop*
```

!!! note
    This would have deleted the message that called it, but of course you can't see that here.

## Supports

* [Custom commands](/Modules/custom_commands/)
* [Level-up messages](/Modules/levels/)
