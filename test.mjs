import Tom from 'test-object-model/index.mjs'
import getAssert from './index.mjs'

const tom = new Tom()

tom.test('simple', async function () {
  const assert = await getAssert()
  assert.equal(1, 1)
  try {
    assert.equal(1, 2)
  } catch (err) {
    if (!(err.code === 'ERR_ASSERTION' || err.name === 'AssertionError')) {
      throw new Error('broken')
    }
  }
})

export default tom
