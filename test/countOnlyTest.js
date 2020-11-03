const countOnly = require('../countOnly');
const assert = require('chai').assert;


describe("#Count Only", () => {
  it("returns 1 for Jason", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.deepEqual(result["Jason"], 1);
  });
});
