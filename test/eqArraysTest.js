const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, 3];
    assert.deepEqual(eqArrays(array1, array2), true);
  });
  it("returns false for [1, 2, 3], [3, 2, 1]", () => {
    const array1 = [1, 2, 3];
    const array2 = [3, 2, 1];
    assert.deepEqual(eqArrays(array1, array2), false);
  });
  it("returns true for [[2, 3], [4]], [[2, 3], [4]]", () => {
    const array1 = [[2, 3], [4]];
    const array2 = [[2, 3], [4]];
    assert.deepEqual(eqArrays(array1, array2), true);
  });
});
