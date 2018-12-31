# channel.createdAt &lt;exact&gt; &lt;channel&gt;
		
Returns the date the channel was created. "exact" is a true/false value on whether to include hours/minutes.

### Context Requirements

* channel


### Examples

##### input
```{channel.createdAt;general}```

##### output
```Jul 31, 2018```


##### input
```{channel.createdAt;general;true}```

##### output
```Jul 31, 2018, 9:19 PM```