# utils.isSnowflake &lt;string&gt;
		
Returns true if the input is a valid Discord snowflake, or false for any other circumstance. This does not mean the snowflake is definitely used by something, just that it could be in use or used in the future.

### Examples

##### input
```{utils.isSnowflake;111372124383428608}```

##### output
```true```


##### input
```{utils.isSnowflake;awd}```

##### output
```false```


##### input
```{utils.isSnowflake;}```

##### output
```false```


##### input
```{utils.isSnowflake;{user.id}}```

##### output
```true```