// TEST CODE
const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    const inputArray = [1, 2, 3];
    assert.deepEqual(tail(inputArray), [2, 3]);
  });

  it("returns [6, 7] for [5, 6, 7]", () => {
    const inputArray = [5, 6, 7]
    assert.deepEqual(tail(inputArray), [6, 7]);
  });

  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    const inputArray = ["Hello", "Lighthouse", "Labs"];
    assert.deepEqual(tail(inputArray), ["Lighthouse", "Labs"]);
  });
});
