```js
var test = require('ava')
var pizzaMaker = require(process.argv[2])
test.cb('calling pizza maker', t => {
  t.plan(3);
  pizzaMaker(3, function () {
    t.pass('the pizza is ready')
  });
});
```


