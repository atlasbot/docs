# user.color &lt;hex=true&gt; &lt;user&gt;
		
Gets the user's color, based on their highest role. If <hex=true>, the output will be in hex (#ffffff).

### Context Requirements

* user
* settings


### Examples

##### input
```{user.color}```

##### output
```#95a5a6```


##### input
```{user.color;true}```

##### output
```9807270```


##### input
```{user.color;true;Atlas}```

##### output
```#03a9f4```