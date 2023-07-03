// MODULE IMPORT
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

// TEST CODE
eqArrays([1, 2, 3], [1, 2, 3]); // => true
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

eqArrays([1, 2, 3], [3, 2, 1]); // => false
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS

eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

assertEqual(eqArrays([], []), true); // => should PASS