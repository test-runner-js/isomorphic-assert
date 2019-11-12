(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.getAssert = factory());
}(this, (function () { 'use strict';

  async function getAssert () {
    if (typeof window === 'undefined') {
      const assert = await import('assert');
      return assert.strict
    } else {
      await import('https://www.chaijs.com/chai.js');
      return chai.assert
    }
  }

  return getAssert;

})));
