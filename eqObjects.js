// MODULE IMPORT
const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    console.log("The objects aren't the same length");
    return false;
  } else {
    for (let key in object1) {
      if (Array.isArray(object1[key])) {
        // console.log(`[${object1[key]}] is an array`);
        if (!(eqArrays(object1[key], object2[key]))) {
          console.log("The arrays are not the same");
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        console.log("This isn't an array and they're not the same value");
        return false;
      }
    }
    // console.log("They're the same value, array or string");
    return true;
  }
};

// MODULE EXPORT
module.exports = eqObjects;

// TEST CODE
if (require.main === module) {

  console.log(`This is the main module\n`);

}