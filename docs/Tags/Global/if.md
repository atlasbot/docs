# if 
		
Compares values. Unlike most other tags, conditional parsing is enabled, meaning yes will be parsed and no will not in {if;true;===;true;yes;no}.

Available operators are `==`, `!=`, `>=`, `>`, `<=`, `<`, `!==`, `===`, `startswith`, `endswith`, `includes`.

### Examples

##### input
```{if;false;yay}```

##### output
```yay```


##### input
```{if;condition;yay;nay}```

##### output
```yay```


##### input
```{if;cond;===;cond;yay}```

##### output
```yay```


##### input
```{if;cond;!==;cond;yay}```

##### output
``````


##### input
```{if;true;===;true;yay;nay}```

##### output
```yay```