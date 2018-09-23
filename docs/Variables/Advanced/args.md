# args <index\> <range\>

Gets the arguments provided when executing the command.

## Example

!!! note
    For this example, let's assume the command name was `command` and it executed like this

    ```
    a!command this is definitely not a test
    ```

### Input

```json
{args}
{args;2}
{args;2;2}
```

### Output

```json
this is definitely not a test
is
is definitely
```

## Supports

* [Custom commands](/Modules/custom_commands/)
