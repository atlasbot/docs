# role.createdAt [role] &lt;exact&gt;
		
Returns the date the role was created. "exact" is a true/false value on whether to include hours/minutes.

### Context Requirements

* guild


### Examples

##### input
```{role.createdAt;Developer}```

##### output
```Jul 28, 2017```


##### input
```{role.createdAt;Developer;true}```

##### output
```Jul 28, 2017, 7:57 PM```