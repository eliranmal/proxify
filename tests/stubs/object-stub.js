
const nodeFn = () => (...args) => setTimeout(() => args.pop()(null, {foo: 'bar'}), 10);

/**
 * a stub for mysql api, implemented ad-hoc for test needs
 */
const stub = {
  foo: nodeFn(),
  bar: nodeFn(),
};


module.exports = stub;