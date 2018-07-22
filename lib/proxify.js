/**
 * transform callback-style functions into promises.
 *
 * @param fn the function to promisify
 * @param ctx a context to bind on invocation
 * @returns {function(...[*]): Promise<any>}
 */
const promisify = (fn, ctx = Object.create(null)) => (...args) => {
  return new Promise((resolve, reject) => {
    try {
      const cb = (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      };
      fn.call(ctx, ...(args.concat(cb)));
    } catch (ex) {
      reject(ex);
    }
  });
};


/**
 * creates an opaque wrapper around the passed object,
 * while promisifying all function invocations.
 *
 * @param target the object to wrap.
 * @returns {object} a wrapped object, with all its functions promisified.
 */
const proxify = (target) => new Proxy(target, {
  get(target, key) {
    const orig = Reflect.get(target, key);
    if (typeof orig === 'function') {
      return async (...args) => {
        return promisify(target[key], target)(...args);
      };
    }
    return orig;
  }
});


module.exports = proxify;
