# user.removerole [role id/name/mention] &lt;user&gt;
		
Removes a role from the user. Role is matched using a fuzzy matcher.

### Context Requirements

* user
* guild
* settings


### Examples

##### input
```{user.removerole;Humans}```

##### output
``````

!!! note
		The user would no longer have the role. Returns nothing on success.