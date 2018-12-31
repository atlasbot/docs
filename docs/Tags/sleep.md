# sleep [timeout]
		
Temporarily holds up processing. Tags before it will run normally, tags after it will have to wait. 

### Examples

##### input
```{channel.send;before the sleep} {sleep;10} {channel.send;yay im back}```

##### output
```before the sleep
...
yay im back```

!!! note
		"before the sleep" would be sent first, then 10 seconds later "yay im back" would follow.