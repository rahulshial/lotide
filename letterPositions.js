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

const letterPositions = function(sentence) {
  const letterIdxLib = {};
  // logic to update results here

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i]; // get the letter at position i
    if (letter !== ' ') {
      if (!Array.isArray(letterIdxLib[letter])) {
        // The array within the letter does not exist in the letterIdxLib
        letterIdxLib[letter] = [i];
      } else {
        letterIdxLib[letter].push(i);
      }
    }
  }
  return letterIdxLib;
};

//Test Code

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
