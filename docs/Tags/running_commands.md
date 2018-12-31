# Running Commands

Each command has an auto-generated tag that comes with it to run it from a tag.

## Examples

##### Input

```
{a!ping}
```

#### Output

```

```

!!! note
    The command would run and output it's usual message, then return nothing once completed. With this tag, you cannot tell if the command was successful or not.

##### Input

```
{a!say;0w0 whats this?}
```

#### Output

```

```

## Getting a command's message ID

Sometimes you may want the ID of the command's output message for future use. You can get this ID by adding an arg with `--returnId` as it's content.

##### Input

```
{a!say;hehe xd rawr;--returnId}
```

##### Output

```
424678567788544002
```
