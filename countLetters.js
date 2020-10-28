// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`:) Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`:( Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const results = {};
  for (const character of string) {
    if (character !== " ") {
      if (results[character]) {
        results[character] += 1;
      } else {
        results[character] = 1;
      }
    }
  }
  return results;
};

const stringToCheck = "lighthouse in the house";
const result1 = countLetters(stringToCheck);


// Test Code
assertEqual(result1["h"], 4); // should pass
assertEqual(result1["e"], 3); // should pass
assertEqual(result1["l"], 2); // should fail
