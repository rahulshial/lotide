const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe("#find key by value", () => {
  it("returns drama for The Wire", () => {
    const bestTVShowsByGenre = {
      "sci_fi": "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const searchKey = "The Wire";
    const expected = "drama";
    assert.equal(findKeyByValue(bestTVShowsByGenre, searchKey), expected);
  });
});
