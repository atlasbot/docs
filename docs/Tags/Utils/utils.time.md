# utils.time &lt;exact=true&gt; &lt;timestamp&gt;
		
Formats the current/a date to a pretty timestamp.

### Examples

##### input
```{utils.time}```

##### output
```Dec 10, 2018, 4:08 PM```


##### input
```{utils.time;true;Mon, 10 Dec 2018 16:06:14 GMT}```

##### output
```Dec 10, 2018, 4:06 PM```


##### input
```{utils.time;false}```

##### output
```Dec 10, 2018```