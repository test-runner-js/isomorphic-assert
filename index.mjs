/* once top-level async/await is supported in the browser this will not need to be wrapped in an async function */
async function getAssert () {
  if (typeof window === 'undefined') {
    const assert = await import('assert')
    return assert.strict
  } else {
    await import('https://www.chaijs.com/chai.js')
    return chai.assert
  }
}

export default getAssert
