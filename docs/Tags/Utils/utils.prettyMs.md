# utils.prettyMs [milliseconds] &lt;verbose=true&gt;
		
Converts milliseconds to a pretty date. If verbose is true, it will use long names instead of short names, like "minutes" instead of "m".

### Examples

##### input
```{utils.prettyMs;133769}```

##### output
```2 minutes 13 seconds```


##### input
```{utils.prettyMs;133769;false}```

##### output
```2m 13s```