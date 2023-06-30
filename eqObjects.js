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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

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



// TEST CODE
if (require.main === module) {

  console.log("This is the main module");

  
  const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };

  log("\n");
  
  const shirtObject = { color: "red", size: "medium" };
  const anotherShirtObject = { size: "medium", color: "red" };
  const test1 = eqObjects(shirtObject , anotherShirtObject); // => true
  assertEqual(test1, true);
  
  log("\n");
  
  const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
  const test2 = eqObjects(shirtObject , longSleeveShirtObject); // => false
  assertEqual(test2, false);

  log("\n");
  
  const test3 = eqObjects(longSleeveShirtObject, shirtObject); // => false
  assertEqual(test3, false);
  
  log("\n");
  
  const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
  const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
  const test4 = eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
  assertEqual(test4, true);
  
  log("\n");
  
  const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
  const test5 = eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
  assertEqual(test5, false);
  
  log("\n");
  
  const multiColorShirtObject1 = { colors: ["red", "blue"], size: "medium", something: ["this", "is"]};
  const anotherMultiColorShirtObject1 = { something: ["this", "is", "one"], size: "medium", colors: ["red", "blue"] };
  const test6 = eqObjects(multiColorShirtObject1  , anotherMultiColorShirtObject1); // => false
  assertEqual(test6, false);
  
}