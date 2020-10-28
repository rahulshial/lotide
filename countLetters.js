// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`:) Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`:( Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string, itemsToCount) {
  const results = {};
  for (const character of string) {
    if (character !== " ") {
      if (itemsToCount[character]) {
        if (results[character]) {
          results[character] += 1;
        } else {
          results[character] = 1;
        }
      }
    }
  }
  console.log(results);
  return results;
};

const stringToCheck = "lighthouse in the house";
const result1 = countLetters(stringToCheck, { "l": true, "h": false, "t": true, "z": true });


// Test Code
assertEqual(result1["l"], 1);
assertEqual(result1["t"], 2);
assertEqual(result1["z"], undefined);
assertEqual(result1["h"], undefined);
