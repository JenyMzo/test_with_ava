```js
var test = require('ava')
var fancify = require(process.argv[2])

test('fancify returns the string wrapped by ~*~', t => {
    t.deepEqual(fancify('Hello'), '~*~Hello~*~');
});

test('fancify takes an optional second argument that converts the string into ALLCAPS', t => {
    t.deepEqual(fancify('Hello', true), '~*~HELLO~*~');
});

test('fancify takes a third optional argument that determines the character in the middle', t => {
    t.deepEqual(fancify('Hello', false, '!'), '~!~Hello~!~');
});
```
