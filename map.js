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

// MODULE EXPORT
module.exports = map;

// TEST CODE
if (require.main === module) {

  console.log(`This is the main module\n`);

}