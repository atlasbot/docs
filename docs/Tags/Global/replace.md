# replace &lt;string&gt; &lt;search&gt; &lt;replacement&gt;
		
Replaces <search> in <string> with <replacement>, now with extra regexp flavour.

### Examples

##### input
```{replace;kittens are the best;kittens;puppies}```

##### output
```puppies are the best```


##### input
```{replace;Kittens are the best;kittens;puppies}```

##### output
```puppies are the best```

!!! note
		Note the capitalized "Kittens". {replace} is case-insensitive.


##### input
```{replace;The quick brown fox jumped over the lazy fox;([A-z]+);($1)}```

##### output
```(The) (quick) (brown) (fox) (jumped) (over) (the) (lazy) (fox)```

!!! note
		This example uses regular expressions, essentially surrounding groups of a-z in (). Google is your friend, but chances are you should just leave this alone if you don't understand interface.