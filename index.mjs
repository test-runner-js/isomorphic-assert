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
