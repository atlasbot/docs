# user.bot &lt;user&gt;
		
Checks whether a user is a bot. Returns true/false.

### Context Requirements

* user
* guild


### Examples

##### input
```{user.bot}```

##### output
```false```

!!! note
		Assumes the user in context is not a bot. 


##### input
```{user.bot;Atlas}```

##### output
```true```

!!! note
		Assumes the user in context is a bot.