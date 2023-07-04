// MODULE IMPORT
const without = require('../without');
const assertArraysEqual = require('../assertArraysEqual');


// TEST CODE
const test1 = without([1, 2, 3], [1]); // => [2, 3]

const test2 = without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function


assertArraysEqual(test1, [2, 3]);
assertArraysEqual(test2, ["1", "2"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);