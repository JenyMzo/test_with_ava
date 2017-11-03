```js
var test = require('ava')
var pizzaMaker = require(process.argv[2])

test.cb('calling pizza maker', t => {
  t.plan(3)
  pizzaMaker(3, () => {
      t.pass('pizza maker has been called')
  });
  t.end()
});
```

