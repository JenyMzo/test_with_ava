# Tape it together

Write tests that output `TAP`, that tests the following properties of a function
`fancify`. The function will be provided in `process.argv[2]`.

1 `fancify(str)` returns the `str` wrapped in `~*~`
  Example: `fancify('Hello')` returns `~*~Hello~*~`
2 It takes an optional second argument that converts the string into ALLCAPS
  Example: `fancify('Hello', true)` returns `~*~HELLO~*~`
3 It takes a third optional argument that determines the character in the middle
  Example: `fancify('Hello', false, '!')` returns `~!~Hello~!~`

## Hints

Let's see a test example using AVA:

```js  
  test('test #1', t => {
    t.is(index.getName(), 'Andromeda', 'it Works');
  });
```
AVA is not included in Node, so you need to install it in your
project folder (where you keep your exercise files) using `npm install ava`.

And don't forget to get the sources.
```js
  const test = require('ava');
```

Here is a list of some assertions you can use with AVA. 

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
