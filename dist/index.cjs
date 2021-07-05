'use strict';

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

/* once top-level async/await is supported in the browser this will not need to be wrapped in an async function */
async function getAssert () {
  if (typeof window === 'undefined') {
    const assert = await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('assert')); });
    return assert.strict
  } else {
    await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('https://www.chaijs.com/chai.js')); });
    return chai.assert
  }
}

module.exports = getAssert;
