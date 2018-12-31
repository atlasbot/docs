# channel.awaitmessage &lt;author&gt; &lt;timeout&gt; &lt;channel&gt;
		
Wait for a message in a channel. Returns the message content. Author is a user ID, when set only accept messages from that user. Timeout is, in seconds, how long to wait before giving up if no messages are sent. Defaults to 30s.

### Context Requirements

* channel


### Examples

##### input
```{channel.awaitmessage;{user.id};60}```

##### output
```wew```