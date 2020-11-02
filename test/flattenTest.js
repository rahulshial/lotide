const flatten = require('../flatten');
const assert = require('chai').assert;

describe("#flatten arrays", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    const inputArray = [1, 2, [3, 4], 5, [6]];
    const outputArray = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(flatten(inputArray), outputArray);
  });
});
