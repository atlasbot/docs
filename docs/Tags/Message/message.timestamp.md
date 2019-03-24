# message.timestamp &lt;exact&gt; &lt;message id&gt; &lt;message channel&gt;
		
Returns the time the message was sent. "exact" is a true/false value on whether to include hours/minutes.

### Context Requirements

* message


### Examples

##### input
```{message.timestamp}```

##### output
```Nov 4, 2015```


##### input
```{message.timestamp;true}```

##### output
```Nov 4, 2015, 7:53 AM```