# proxify

> callbacks to `async`s, all over the place

[![NPM][1]][2]


## overview

`async`ify all functions on an object with node-style functions.


## usage

```js
const obj = {
  foo: (bar, done) => done(null, 'wat'),
};

const asyncObj = proxify(obj);

const result = await asyncObj.foo(1);
```



[1]: https://img.shields.io/npm/v/@eliranmal/proxify.svg?style=flat-square
[2]: https://www.npmjs.com/package/@eliranmal/proxify
