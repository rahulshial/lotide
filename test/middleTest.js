// const middle = require('../middle');
import {middle} from '../middle.js';
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [] for [1] & []", () => {
    const inputArray1 = [];
    const inputArray2 = [];
    const expectedOutput = [];
    assert.deepEqual(middle(inputArray1, inputArray2), expectedOutput);
  });
  it("returns [] for [1, 2] & []", () => {
    const inputArray1 = [1, 2];
    const inputArray2 = [];
    const expectedOutput = [];
    assert.deepEqual(middle(inputArray1, inputArray2), expectedOutput);
  });
  it("returns [2] for [1, 2, 3] & [2]", () => {
    const inputArray1 = [1, 2, 3];
    const inputArray2 = [2];
    const expectedOutput = [2];
    assert.deepEqual(middle(inputArray1, inputArray2), expectedOutput);
  });
  it("returns [3] for [1, 2, 3, 4, 5] & [3]", () => {
    const inputArray1 = [1, 2, 3, 4, 5];
    const inputArray2 = [3];
    const expectedOutput = [3];
    assert.deepEqual(middle(inputArray1, inputArray2), expectedOutput);
  });
  it("returns [2, 3] for [1, 2, 3, 4] & [2, 3]", () => {
    const inputArray1 = [1, 2, 3, 4];
    const inputArray2 = [2, 3];
    const expectedOutput = [2, 3];
    assert.deepEqual(middle(inputArray1, inputArray2), expectedOutput);
  });
});

