```js
var test = require('ava')
var pizzaMaker = require(process.argv[2])
test.cb('calling pizza maker', t => {
  pizzaMaker(3, (err, result) => {
      t.pass('pizza maker has been called')
      t.end()
  });
});
```


