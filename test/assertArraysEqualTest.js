// MODULE IMPORT
const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE
console.log("\n");

assertArraysEqual([1, 2, 3], [1, 3, 3]); // => false
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [1, 3, 3]); // => false

console.log("\n");