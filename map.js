/*
√

Function Definition

Our map function will take in two arguments:

[√] An array to map
[√] A callback function

[√] The map function will return a new array based on the results of the callback function.

*/

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }
  return results;
};


// TEST CODE
if (require.main === module) {

  console.log("This is the main module\n");

  const words = ["ground", "control", "to", "major", "tom"];
  const test1 = ['g', 'c', 't', 'm', 't'];

  const results1 = map(words, word => word[0]);
  console.log(results1);

  const eqArrays = function(array1, array2) {
    if (array1.length === 0 && array2.length === 0) {
      return true;
    }
    if (array1.length !== array2.length) {
      return false;
    } else {
      for (let i in array1) {
        if (array1[i] !== array2[i]) {
          return false;
        }
      }
      return true;
    }
  };

  const assertArraysEqual = function(array1, array2) {
    if (!(eqArrays(array1, array2))) {
      console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
      return;
    }
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  };
  

  assertArraysEqual(results1, test1);



}

