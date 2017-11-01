# let's prepare pizza

Write a test for a function `pizzaMaker(n, cb)`, that calls the callback 
`cb` exactly `n` times. `n` can be any number you want in your test code.

As before the functions location will be provided through `process.argv[2]`.

## Hints

Sometimes we are not simply checking return values of functions. A lot in 
JavaScript and node happens through callbacks and events. For this we often want
to know: Was that callback called or not?

The event-driven nature of JavaScript is also the reason why we had to call the 
`t.end()` function in the last level. The test has to know whether we are done.

However there is maybe a better way to do this with callbacks using `t.plan(n)`.
When we call this in the beginning we can tell `tape` how many assertions we are
doing.

```js
  test.cb('testing with a callback', t => {
	  callback('', t.end);
  });

  test.cb('calling pizza maker', function (t) {
    pizzaMaker(3, function (res) {
        console.log(res);
        t.is(res, '');
        t.end();
    });
});
```

In this example we only have one callback, which will simply pass the test when
it is called. So we could have used `t.end()` within the callback instead.
However you might see, that if we had multiple callbacks in our tests the 
`t.plan(n)` would come in handy.