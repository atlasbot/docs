# user.createdAt &lt;exact&gt; &lt;user&gt;
		
Returns the date the users account was created. "exact" is a true/false value on whether to include hours/minutes.

### Context Requirements

* user
* guild


### Examples

##### input
```{user.createdAt}```

##### output
```Nov 4, 2015```


##### input
```{user.createdAt;true}```

##### output
```Nov 4, 2015, 7:53 AM```