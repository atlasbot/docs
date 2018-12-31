# channel.send [content] &lt;channel&gt;
		
Sends a message to the channel.

### Context Requirements

* channel


### Examples

##### input
```{channel.send;ayyy}```

##### output
```ayyy```


##### input
```{channel.send;ayyy;#general}```

##### output
```ayyy```

!!! note
		Output would be sent to the #general channel, regardless of where it was called.