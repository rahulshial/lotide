// read thru the array
// for each array element, check if array or not
// if element is an array, use a separate for loop to read each element and push to returnArray
// if element is not an array, push to returnArray

const flatten = function(array) {
  let returnArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        returnArray.push(array[i][j]);
      }
    } else {
      returnArray.push(array[i]);
    }
  }
  return returnArray;
};

// const assertArraysEqual = function(actual, expected) {

//   if (eqArrays(actual, expected)) {
//     console.log(`:) Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`:( Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// const eqArrays = function(actual, expected) {
//   if (actual.length !== expected.length) {
//     return false;
//   } else {
//     for (let i = 0; i < actual.length; i++) {
//       if (actual[i] !== expected[i]) {
//         return false;
//       }
//     }
//   }
//   return true;
// };

module.exports = flatten;
