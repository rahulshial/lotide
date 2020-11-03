const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letter Positions", () => {
  it("returns [1] for finding e in hello", () => {
    const input = "hello";
    const expectedOutput = [ 1 ];
    assert.deepEqual(letterPositions(input).e, expectedOutput);
  });
});


