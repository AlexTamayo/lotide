/*

[√] Implement the function findKey which takes in an object and a callback.
[√] It should scan the object and return the first key for which the callback returns a truthy value.
[√] If no key is found, then it should return undefined.

*/

const log = console.log;

const findKey = function(object, callback) {

  const keys = Object.keys(object);

  for (const key of keys) {
    if (callback(object[key])) {
      return key;
    }
  }

  return undefined;
};

// TEST CODE
if (require.main === module) {

  console.log("This is the main module\n");
  
  const result1 = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2); // => "noma"

  const assertEqual = function(actual, expected) {
    if (!(actual === expected)) {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
      return;
    }
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  };

  assertEqual(result1, "noma");


}






