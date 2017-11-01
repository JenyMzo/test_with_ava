```js
var test = require('tape')
var repeatCallback = require(process.argv[2])

test('repeatCallback', function (t) {
  t.plan(4)
  repeatCallback(4, function () {
    t.pass('callback called')
  })
})

test.cb('calling pizza maker', function (t) {
  t.plan(3);
  pizzaMaker(3, function (res) {
      console.log(res);
      t.is(res, '');
      t.end();
  });
});
```
