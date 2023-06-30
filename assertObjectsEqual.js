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

// abbreviation of console.log
const log = console.log;

const eqObjects = function(object1, object2) {
  
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    log("The objects aren't the same length");
    return false;
  } else {
    for (let key in object1) {
      if (Array.isArray(object1[key])) {
        // log(`[${object1[key]}] is an array`);
        if (!(eqArrays(object1[key], object2[key]))) {
          log("The arrays are not the same");
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        log("This isn't an array and they're not the same value");
        return false;
      }
    }
    // log("They're the same value, array or string");
    return true;
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


// TEST CODE
if (require.main === module) {

  console.log("\n");

  console.log("This is the main module");

  const object1 = { a: '1', b: 2 };

  const object2 = { b: 2, a: '1' };

  assertObjectsEqual(object1, object2);

}
