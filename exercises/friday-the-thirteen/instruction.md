# Friday the 13th

Months That Begin on a Sunday will Always have a Friday the 13th

Write a test for the function `isFridayTheThirteen`, it will assure that function returns `true` when passing `sunday` in it.

The function will be provided in `process.argv[2]`.

-----

## Hints

The `console.log()` statement is very useful when we want to know what's going on with our code. So, if a larger application depends on a specific function in many places, a small change in one place could create a hard to find a bug. AVA provide us `asserts`. A best way to control and monitoring the behavior of our code.

Let's see how it works...

```js  
  test('test #1', t => {
    t.is(index.getName(), 'Andromeda', 'it Works');
  });
```

And don't forget to get the sources.
```js
  const test = require('ava');
```

Here is a list of some assertions you can use. 

```js
.pass([message]) //Passing assertion.
.fail([message]) //Failing assertion.
.truthy(value, [message]) //Assert that value is truthy.
.falsy(value, [message]) //Assert that value is falsy.
.true(value, [message]) //Assert that value is true.
.false(value, [message]) //Assert that value is false.
.is(value, expected, [message]) //Assert that value is the same as expected. This is based on Object.is().
.not(value, expected, [message])//Assert that value is not the same as expected. This is based on Object.is().
.deepEqual(value, expected, [message]) //Assert that value is deeply equal to expected. See Concordance for details. Works with React elements and react-test-renderer.
.notDeepEqual(value, expected, [message])//Assert that value is not deeply equal to expected. The inverse of .deepEqual().
```

## Resources
- AVA documentation: https://www.npmjs.com/package/ava
