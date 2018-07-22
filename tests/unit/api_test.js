'use strict';

const expect = require('chai').expect;
const stub = require('../stubs/object-stub');
const proxify = require('../../lib/proxify');

let sut;

describe('api', function () {
  
  beforeEach(() => {
    sut = proxify(stub);
  });

  describe('a known object method', () => {

    it('should be available on the instance', async () => {
      const result = sut.foo;
      expect(result).to.be.an('function');
    });
  });

  describe('successful invocation with `await`', () => {

    it('should yield a result', async () => {
      const result = await sut.bar('string', 1);
      expect(result).to.be.an('object');
    });
  });
});

