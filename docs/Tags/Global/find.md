# find &lt;target&gt; &lt;search&gt; &lt;group&gt; &lt;flags=i&gt;
		
Finds <search> in <target>, now with extra regexp flavour. <group> is an optional capture group to return when using regex. <flags> are any regex flags like "g" or "i", you can mix and match groups like "gi".

### Examples

##### input
```{find;This is a test;test}```

##### output
```test```


##### input
```{find;This does not include the forbidden word;test}```

##### output
``````


##### input
```{find;The date is 07-08-2018;([0-9]{1,2})(?:/|-)([0-9]{1,2})(?:/|-)([0-9]{2,4});3}```

##### output
```2018```

!!! note
		Using some regex magic, this will match dates and return the year using the third capture group. This is an advanced example.