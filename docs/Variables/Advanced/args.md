# args [index, range]

Gets the arguments provided when executing the command.

## Example
!!! note
    For this example, let's assume the command name was `command` and it was run like this
    ```
    a!command this is definitely not a test
    ```
*Input*
```
{args}
{args;2}
{args;2;2}
```
*Output*
```
this is definitely not a test
is
is definitely
```

## Supports

* [Custom commands](/Modules/custom_commands/)
