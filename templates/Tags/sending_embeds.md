# Sending Embeds

If you ever want to send a fancy embed, then there is a simple way to do just that. Using the [Embed Builder](https://atlasbot.xyz/embed-builder), you can create your own embed using a graphical interface and convert it to a tag.

## Creating the embed

To create an embed that is a usable tag, go to the [embed builder](https://atlasbot.xyz/embed-builder) and create your perfect embed. You can do anything a regular embed can do here. Once you're done, go to `copy > {a!advancedembed} tag`. The tag for that embed is now on your clipboard.

## Using an embed

Once you have the tag for an embed on your clipboard, it's quite easy to use it.

### Examples

##### Input

```
{a!advancedembed;--color="#ff00c4";--title="My epic embed";--description="0w0 whats this :D"}
```

##### Output

```

```

!!! note
		The embed would have been sent, but because it's a command tag, it will not return any output.

##### Input

```
{channel.send;{a!advancedembed;--color="#ff00c4";--title="My epic embed";--description="0w0 whats this :D"};general}
```

##### Output

```

```

!!! note
		The embed would have been sent to the "general" channel, but because it's a command tag, it will not return any output.
