// FUNCTION IMPLEMENTATION
const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;