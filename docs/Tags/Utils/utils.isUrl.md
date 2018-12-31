# utils.isUrl &lt;string&gt; &lt;verify=false&gt;
		
Returns true if <string> is a valid web URL, or false if it's anything else. If <verify=true> then the Atlas will perform a HEAD request and make sure the URL is "live".

### Examples

##### input
```{utils.isUrl;https://atlasbot.xyz}```

##### output
```true```


##### input
```{utils.isUrl;hahaepic}```

##### output
```false```


##### input
```{utils.isUrl;}```

##### output
```false```


##### input
```{utils.isUrl;protocol://example.com}```

##### output
```false```