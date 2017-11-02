# Friday the 13th

Months That Begin on a Sunday will Always have a Friday the 13th

Write a test for the function `isFridayTheThirteen`, it will assure that function returns `true` when passing `sunday` in it.

The function will be provided in `process.argv[2]`.

-----

## Hints

The `console.log()` statement is very useful when we want to know what's going on with our code. So, if a larger application depends on a specific function in many places, a small change in one place could create a hard to find a bug. NodeJS provide us `asserts`. A best way to control and monitoring the behavior of our code.

Let's see how it works...

```js
  var assert = require('assert')
  assert(add(2,1) === 3,'add(2,1) should be 3')
```

Or as alternatively:
```js
  assert.deepEqual(add(2,1), 3, 'add(2,1) should be 3')
```

Here are some functions you can use with assert. For a full list, see the 
documentation.
```js
assert.ok(value, message) // tests if value is truthy
assert.equal(actual, expected, message) // ==
assert.notEqual(actual, expected, message) // !=
assert.deepEqual(actual, expected, message) // for comparing objects
assert.notDeepEqual(actual, expected, message)
assert.strictEqual(actual, expected, message) // ===
assert.notStrictEqual(actual, expected, message) // !==
```