# user.addrole [role id/name/mention] &lt;user&gt;
		
Gives a user a role. Role is matched using a fuzzy matcher.

### Context Requirements

* user
* guild
* settings


### Examples

##### input
```{user.addrole;Humans}```

##### output
``````

!!! note
		The user would have the role. Returns nothing on success.


##### input
```{user.addrole;Humans;Sylver}```

##### output
``````

!!! note
		Sylver would now have the "Humans" role.