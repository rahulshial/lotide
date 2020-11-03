const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe("#eqObjects", () => {
  it('returns true for { a: "1", b: "2" }, { b: "2", a: "1" }', () => {
    const object1 = { a: "1", b: "2" };
    const object2 = { b: "2", a: "1" };
    assert.deepEqual(eqObjects(object1, object2), true);
  });

  it('returns true for { a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }', () => {
    const object1 = { a: { z: 1 }, b: 2 };
    const object2 = { a: { z: 1 }, b: 2 };
    assert.deepEqual(eqObjects(object1, object2), true);
  });
});