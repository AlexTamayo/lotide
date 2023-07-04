// MODULE IMPORT
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (!(eqArrays(array1, array2))) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
    return;
  }
  console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
};

// MODULE EXPORT
module.exports = assertArraysEqual;

// TEST CODE
if (require.main === module) {

  console.log(`This is the main module\n`);

}