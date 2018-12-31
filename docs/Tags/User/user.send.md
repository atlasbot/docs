# user.send [message] &lt;user&gt;
		
Direct-messages a user a message.

### Context Requirements

* user


### Examples

##### input
```{user.send;Hello :)}```

##### output
``````

!!! note
		This tag does not output anything on success.


##### input
```{user.send;Hello :)}```

##### output
```{user.send-ERROR1}```

!!! note
		This tag will throw an error if the user's direct-messages are not open.