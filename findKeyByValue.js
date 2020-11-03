// FUNCTION IMPLEMENTATION
const findKeyByValue = function(searchObject, keySearch) {

  for (const key of Object.keys(searchObject)) {
    if (searchObject[key] === keySearch) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
