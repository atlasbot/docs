# user.discriminator

Returns the users discriminator. The discriminator is that number after your name, for example if your full tag was `Sylver#1058`, your discriminator is `1058`.

## Example

### Input

```json
Hello {user.username}#{user.discriminator}!
```

### Output

```json
Hello Sylver#1058!
```

## Supports

* [Custom commands](/Modules/Modules/custom_commands/)
* [Join messages](/Modules/join_leave_messages/)
* [Level-up messages](/Modules/levels/)
