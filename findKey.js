/*

[√] Implement the function findKey which takes in an object and a callback.
[√] It should scan the object and return the first key for which the callback returns a truthy value.
[√] If no key is found, then it should return undefined.

*/


const findKey = function(object, callback) {

  const keys = Object.keys(object);

  for (const key of keys) {
    if (callback(object[key])) {
      return key;
    }
  }

  return undefined;
};


// MODULE EXPORT
module.exports = findKey;

// TEST CODE
if (require.main === module) {

  console.log(`This is the main module\n`);

}