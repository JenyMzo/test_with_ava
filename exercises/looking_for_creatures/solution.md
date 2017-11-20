```js
var test = require('ava')
var lookingForCreatures = require(process.argv[2])

test('Looking for creatures', t => {
	return lookingForCreatures.then(res => {
		t.is(res, "unicorn 🦄", "");
	});
});
```

