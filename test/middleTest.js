const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// TEST CODE

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual((middle([1, 2])), []); // => []
assertArraysEqual((middle([1, 2, 3])), [2]); // => [2]
assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]); // => [3]
assertArraysEqual((middle([1, 2, 3, 4])), [2, 3]); // => [2, 3]
assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4]); // => [3, 4]
