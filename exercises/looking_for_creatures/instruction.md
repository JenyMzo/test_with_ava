# Looking for creatures

Write a test for a promise `lookingForCreatures()`, that verifies that promise is resolving with an `unicorn 🦄.`

As before the functions location will be provided through `process.argv[2]`.

When you are going to test if a promise is resolving you can do the following:

```js
test('1st promise test', t => {
	return anyPromise().then(res => {
		t.is(result, expected);
	});
});
```

Also there are another assertions to test promises

```js
.throws(promise, [error, [message]]) //Assert that `function` throws an error, or `promise` rejects with an error.
.notThrows(promise, [message]) //Assert that `function` does not throw an error or that `promise` does not reject with an error.
```