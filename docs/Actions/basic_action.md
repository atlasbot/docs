# Basic Action

This is a basic example for an action. It will get the topic for a channel, with an optional argument to say which channel.

## Sub-action content

```
{channel.topic;{args}}
```

## An explanation

- `{args}` will get all the args of the action.
- `{channel.topic}` gets a channel topic. The last argument it takes will specify a channel query.

So, this action will:

- Get the arguments of the action
- Get the topic for the invocation channel or the channel provided.
- Return that topic

Because this is such a basic example, If the channel has no topic it won't do anything.

## Usage

- Create a new command action with a name like "channelinfo".
- Copy/paste the "Sub-action content" into the first sub-action.
- Save it
- Go to your server and do `a!<name>`, e.g `a!channelinfo`. Ta-da!

## But wait! We can make this better.

This basic command is good, but we can make some more advanced improvements to make it even better-er. To be clear, these are some more advanced improvements to give you an idea of how far you could take this. This isn't a "if your command isn't this good you're not a real admin".

### The new version

```
{or;
    {channel.topic;
        {args}
    };
    {if;{args};That;This} channel has no topic :c
}
```

### Changes

- If there is no channel topic, we'll reply with '(this|that) channel has no topic :c'
- In the above change, "that" is used when args are provided, or "this" otherwise.

You could take this even further, maybe include the query in the "no topic" message, but I think that's enough to give you an idea of what you could do.
