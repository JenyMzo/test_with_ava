```js
var test = require('ava')
var repeatCallback = require(process.argv[2])

test.cb('repeatCallback', function (t) {
  t.plan(4)
  repeatCallback(4, function () {
    t.pass('callback called')
  })
})
```
