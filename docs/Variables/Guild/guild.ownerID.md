# guild.ownerID

Returns the guild's owner's ID, which looks something like `111372124383428608`

## Example

### Input

```json
The owner of this server is <@{guild.ownerID}>
```

### Output

```json
The owner of this server is @Sylver
```

!!! note
    `<@111372124383428608>` would mention a user (in that case, `Sylver#1058`), so `<@{guild.ownerID}>` will mention the guild owner.

## Supports

* [Custom commands](/Modules/custom_commands/)
* [Join and leave messages](/Modules/join_leave_messages/)
* [Level-up messages](/Modules/levels/)
