/*

Implement the function findKeyByValue which takes in an object and a value.
It should scan the object and return the first key which contains the given value.
If no key with that given value is found, then it should return undefined.


INPUT
  object and value

FLOW
  check the object's value if value in key match input value then return the key

OUTPUT
  return key string of a given value.

*/

const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

// MODULE EXPORT
module.exports = findKeyByValue;

// TEST CODE
if (require.main === module) {

  console.log(`This is the main module\n`);

}