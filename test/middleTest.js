// MODULE IMPORT
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


// TEST CODE
console.log(middle([1])); // => []
assertArraysEqual(middle([1]), []);

console.log(middle([1, 2])); // => []
assertArraysEqual(middle([1, 2]), []);

console.log(middle([1, 2, 3])); // => [2]
assertArraysEqual(middle([1, 2, 3]), [2]);

console.log(middle([1, 2, 3, 4, 5])); // => [3]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9])); // => [5]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]);

console.log(middle([1, 2, 3, 4])); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);

console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])); // => [6, 7]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), [6, 7]);