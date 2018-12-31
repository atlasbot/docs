# user.addrole [role id/name/mention]  &lt;exact=false&gt; &lt;user&gt;
		
Adds a role to the user. When exact is true, Atlas will be strict and only search for a role that matches the name/ID exactly. Otherwise, ATlas will use the fuzzy searcher.

### Context Requirements

* user
* guild


### Examples

##### input
```{user.addrole;Humans}```

##### output
``````

!!! note
		The user would have the role. Returns nothing on success.