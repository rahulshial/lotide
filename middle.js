// The middle function should return an array with only the middle element(s) of the provided array.
// This means that the length of the returned elements could vary.
// For arrays with one or two elements, there is no middle. Return an empty array.
// For arrays with odd number of elements, an array containing a single middle element should be returned.
// For arrays with an even number of elements, an array containing the two elements in the middle should be returned

// ACTUAL FUNCTION
const middle = function(array) {
  //...
  let returnArray = [];
  let midIndex = 0;
  
  if (array.length <= 2) {
    return returnArray;
  } else if (array.length % 2 !== 0) {

    midIndex = Math.floor(array.length / 2);
    returnArray.push(array[midIndex]);
  } else {

    // Assumed that the Array Length is even and greater than 2
    midIndex = Math.floor((array.length - 1) / 2);
    for (let i = midIndex; i <= midIndex + 1; i++) {
      returnArray.push(array[i]);
    }
  }
  return returnArray;
};

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

// TEST CODE
//

console.log(assertArraysEqual(middle([1]), [])); // => []
console.log(assertArraysEqual((middle([1, 2])), [])); // => []
console.log(assertArraysEqual((middle([1, 2, 3])), [2])); // => [2]
console.log(assertArraysEqual((middle([1, 2, 3, 4, 5])), [3])); // => [3]
console.log(assertArraysEqual((middle([1, 2, 3, 4])), [2, 3])); // => [2, 3]
console.log(assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4])); // => [3, 4]



