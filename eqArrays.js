const eqArrays = function(array1, array2) {
  let condition = false;
  for (let i in array1) {
    if (array1[i] !== array2[i]) {
      return false;
    } else {
      condition = true;
    }
  }
  return condition;
};

/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
*/

if (require.main === module) {

  console.log("This is the main module");

  eqArrays([1, 2, 3], [1, 2, 3]); // => true
  eqArrays([1, 2, 3], [3, 2, 1]); // => false
  
  eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
  eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
  
  // assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

}


