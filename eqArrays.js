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


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
if (require.main === module) {

  console.log("This is the main module");

  eqArrays([1, 2, 3], [1, 2, 3]); // => true
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

  eqArrays([1, 2, 3], [3, 2, 1]); // => false
  assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS
  
  eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
  
  eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS
  
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

  assertEqual(eqArrays([], []), true); // => should PASS

}


