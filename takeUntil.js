/*

It will take in two parameters as well:

[√] The array to work with
[√] The callback (which Lodash calls "predicate")

[√] The function will return a "slice of the array with elements taken from the beginning."
It should keep going until the callback/predicate returns a truthy value.

[√] To keep things simple, the callback should only be provided one value: The item in the array.

*/

const log = console.log;

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


// TEST CODE
if (require.main === module) {

  console.log("This is the main module\n");

  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const results1 = takeUntil(data1, x => x < 0);
  const test1 = [1, 2, 5, 7, 2];
  console.log(results1);

  console.log('---');

  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  const results2 = takeUntil(data2, x => x === ',');
  const test2 = ["I've", 'been', 'to', 'Hollywood'];
  console.log(results2);


  const eqArrays = function(array1, array2) {
    if (array1.length === 0 && array2.length === 0) {
      return true;
    }

    if (array1.length !== array2.length) {
      return false;
    }

    for (let i in array1) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }

    return true;
  };

  const assertArraysEqual = function(array1, array2) {
    if (!(eqArrays(array1, array2))) {
      console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
      return;
    }
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  };

  assertArraysEqual(results1, test1);
  assertArraysEqual(results2, test2);

}
