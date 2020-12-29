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

console.log(flatten([['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]]));

module.exports = flatten;
