```js
var test = require('ava')
var repeatCallback = require(process.argv[2])
test.cb('calling pizza maker', function (t) {
  t.plan(3);
  pizzaMaker(3, function (res) {
      t.pass('the pizza is ready')
  });
});
```
