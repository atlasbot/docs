# find &lt;target&gt; &lt;search&gt;
		
Finds <search> in <target>, now with extra regexp flavour.

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
```{find;This does not include the forbidden word;[d]+}```

##### output
```d d dd d```

!!! note
		This will return all "d" characters in the string using regex.