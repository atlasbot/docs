# catch [subtag(s)] [message]
		
If an error occures on any of the subtags, it will retun [message] instead of throwing an error. Please keep in mind this will still report the error as usual.

### Examples

##### input
```{catch;{throw;test};Something bad happened :c}```

##### output
```Something bad happened :c```