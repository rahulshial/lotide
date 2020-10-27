// FUNCTION IMPLEMENTATION
const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    console.log(`:( Assertion Failed: ${actual} !== ${expected}`);
    return;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        console.log(`:( Assertion Failed: ${actual} !== ${expected}`);
        return;
      }
    }
  }
  console.log(`:) Assertion Passed: ${actual} === ${expected}`);
};

// Test assertion cases
eqArrays([1, 2, 3], [1, 2, 3]); // => should PASS
eqArrays([1, 2, 3], [3, 2, 1]); // => should FAIL
eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => should FAIL