# Quick Start

Tags are a powerful tool that Atlas uses. The most basic usage is using tags as placeholders that are replaced when the tag is executed or sent. Some of the more advanced tags allow you to conditionally run tags, store persistent data or give a user roles.

If you're new to tags, start out with some basics like [{channel.name}](/Tags/Channel/channel.name/).

## Using Tags

Each tag comes with an example. You can evaluate the example input in your own server by doing `a!tageval <input>`. For example, to see what `{channel.mention}` would output in an action, you could evaluate it by doing `a!tageval {channel.mention}`.

For examples that use tags like `{args}`, you may have to create a action to test them properly.

## Tag Errors

Sometimes, tags return errors. These can be because of internal errors out of your control, or just because it's missing some arguments. You can get a full error message by evaluating the tag with `a!tageval`. If the tag errors out when being evaluated, it will give you details on the error.

### Handling errors

Sometimes you may want to catch errors and display user-friendly messages instead of the default `{tagname-ERRORn}`. The [{catch}](/Tags/Global/catch) tag can be used for just this. `{catch}` will return an error message when a child tag throws an error. You can use [{throw}](/Tags/Global/throw) to purposefully throw an error and test it out.

#### Example

##### Input

```
a!tageval {throw;Oh no, my command broke :c
```

##### Output

```
{throw-ERROR1}
```

##### Input

```
a!tageval {catch;{throw;Oh no, my command broke :c};Aw yis, I caught the error.}
```

##### Output

```
Aw yis, I caught the error.
```
