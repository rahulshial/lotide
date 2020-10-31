// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (actual, expected) => {
  if (actual.length !== expected.length) return false;
  for (let i = 0; i < actual.length; i++) {
    if (Array.isArray(actual[i]) && Array.isArray(expected[i])) {
      if (!eqArrays(actual[i], expected[i])) {
        return false;
      }
    }
    if (!Array.isArray(actual[i]) && !Array.isArray(expected[i])) {
      if (actual[i] instanceof Object && expected[i] instanceof Object) {
        if (!eqObjects(actual[i], expected[i])) {
          return false;
        }
      }
    } else {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false; // converts object into an array of keys and compares their lengths right off the hop
  }
  for (const key of Object.keys(object1)) { // converts object to array of keys a& iterates through each element (aka keys) of the object1 array
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // for eack key, it checks to see if its value is an array in both objects
      if (!eqArrays(object1[key], object2[key])) { // satisfied that they key's values are both arrays, it then passes them into the eqArrays function to compare
        return false;
      }
    }
    if (object1[key] instanceof Object && object2[key] instanceof Object) {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) { // compares the objects key values against each other
        return false;
      }
    }
  }
  return true;
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), true); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), true); // => false

const cd = { d: ['2', 3, {z:1}], c: 1 };
const dc = {c: 1, d: ['2', 3, {z:1}] };
assertEqual(eqObjects(cd, dc), true); // => true

// assertEqual(eqObjects({ a: { z: 1 }, b: 3 }, { a: { z: 1 }, b: 2 }), true); // => true
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), true); // => false
