# user.removerole [role id/name/mention]  &lt;exact=false&gt; &lt;user&gt;
		
Removes a role from the user. When exact is true, Atlas will be strict and only search for a role that matches the name/ID exactly. Otherwise, Atlas will use the fuzzy searcher.

### Context Requirements

* user
* guild


### Examples

##### input
```{user.removerole;Humans}```

##### output
``````

!!! note
		The user would no longer have the role. Returns nothing on success.