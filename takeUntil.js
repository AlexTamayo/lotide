/*

It will take in two parameters as well:

[√] The array to work with
[√] The callback (which Lodash calls "predicate")

[√] The function will return a "slice of the array with elements taken from the beginning."
It should keep going until the callback/predicate returns a truthy value.

[√] To keep things simple, the callback should only be provided one value: The item in the array.

*/

const takeUntil = function(array, callback) {
  const newArray = [];
  for (const e of array) {
    if (callback(e)) {
      break;
    }
    newArray.push(e);
  }
  return newArray;
};

// MODULE EXPORT
module.exports = takeUntil;


// TEST CODE
if (require.main === module) {

  console.log(`This is the main module\n`);

}