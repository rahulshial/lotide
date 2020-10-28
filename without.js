// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(`:) Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`:( Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
  }
  return true;
};

const without = function(list, filter) {
// parse thru the list
// if includes filter, don't push it into new array
// return new array
  let filteredList = [];
  for (let i = 0; i < list.length; i++) {
    if (!filter.includes(list[i])) {
      filteredList.push(list[i]);
    }
  }
  return filteredList;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["1", "2", "3"], [2, 1, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without(words, "world"), ["hello", "world", "lighthouse"]); // => should FAIL