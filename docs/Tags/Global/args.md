# args &lt;index&gt; &lt;range=1&gt;
		
Returns a random argument.

### Context Requirements

* message


### Examples

##### input
```{args;1}```

##### output
```arg1```

!!! note
		Input would be "a!actionlabel arg1 arg2".


##### input
```{args;2}```

##### output
```arg2```

!!! note
		Input would be "a!actionlabel arg1 arg2".


##### input
```{args}```

##### output
```arg1 arg2```

!!! note
		Input would be "a!actionlabel arg1 arg2".


##### input
```{args;2;2}```

##### output
```arg2 arg3```

!!! note
		Input would be "a!actionlabel arg1 arg2 arg3 arg4


##### input
```{args;2;infinity}```

##### output
```arg2 arg3```

!!! note
		This would return all args at index 2 to infinity.