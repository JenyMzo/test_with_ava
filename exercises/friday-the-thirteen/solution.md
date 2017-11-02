```js
const test = require('ava');
const isFridayTheThirteen = require(process.argv[2])

test('isFridayTheThirteen', t => {
    t.true(isFridayTheThirteen('sunday'), 'it Works')
})
```