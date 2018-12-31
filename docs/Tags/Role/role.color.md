# role.color &lt;hex=true&gt;
		
Gets the hex code of a role. If <hex=false>, the color will be in base 10 and may be empty if the role has no color.

### Context Requirements

* guild


### Examples

##### input
```{role.color;Developer}```

##### output
```#95a5a6```


##### input
```{role.color;Developer;false}```

##### output
```9807270```


##### input
```{role.color;@everyone}```

##### output
```0```

!!! note
		The everyone role has no color and cannot have one, so it will always return 0.