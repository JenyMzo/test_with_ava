# let's prepare pizza

Write a test for a function `pizzaMaker(n, cb)`, that calls the callback 
`cb` exactly `n` times. `n` can be any number you want in your test code.

As before the functions location will be provided through `process.argv[2]`.

## Hints

Sometimes we are not simply checking return values of functions.
For this resason, we often want
to know: Was that callback called or not?

If we need to finish with a test we can use:

`t.end()`

However there is maybe a better way to do this with callbacks using `t.plan(n)`.
When we call this in the beginning we can tell `AVA` how many assertions we are
doing.

```js
  test('nextTick', t => {
    t.plan(1)
    process.nextTick(function () {
      t.pass('callback called')
    })
  })
```

In this example we only have one callback, which will simply pass the test when
it is called. So we could have used `t.end()` within the callback instead like this.

```js
test.cb('testing with a callback', t => {
	callback('', t.end);
});
```

However you might see, that if we had multiple callbacks in our tests the 
`t.plan(n)` would come in handy.
