# user.joinedAt &lt;exact&gt; &lt;user&gt;
		
Returns the date the user joined the server at. "exact" is a true/false value on whether to include hours/minutes.

### Context Requirements

* user
* guild


### Examples

##### input
```{user.joinedAt}```

##### output
```Jul 28, 2017```


##### input
```{user.joinedAt;true}```

##### output
```Jul 28, 2017, 7:56 PM```