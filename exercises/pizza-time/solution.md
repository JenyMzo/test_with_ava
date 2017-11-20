```js
var test = require('ava')
var pizzaMaker = require(process.argv[2])

test.cb('Calling pizza Maker', t => {
  pizzaMaker(3, (err, result) => {
    t.deepEqual(result, undefined);
    t.end();
  });
});
```

