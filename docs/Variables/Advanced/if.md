# if

This is one of the most complicated variables, and it can have multiple arguments taht mean different things. Your best bet is to play around with it and test things out for yourself.

## Example

### Example One

#### Input

```json
{if;1;>;2;yay;nay}
```

#### Output

```json
nay
```

### Example Two

#### Input

```json
{if;nay}
```

#### Output

```json
true
```

### Example Three

#### Input

```json
{if;;it exists;it doesnt}
```

#### Output

```json
it doesnt
```

### Example Four

#### Input

```json
{if;str;includes;s;"str" includes "s";"str" does not include "s"}
```

#### Output

```json
"str" includes "s"
```

## Supports

* [Custom commands](/Modules/custom_commands/)
