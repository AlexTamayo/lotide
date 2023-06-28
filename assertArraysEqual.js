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

const assertArraysEqual = function(actual, expected) {
  // console.log(actual[0]);
  // console.log(actual[1]);
  const condition = eqArrays(actual[0], actual[1]);
  if (condition) {
    console.log(`✅✅✅ Assertion Passed: ${condition} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${condition} !== ${expected}`);
  }
};

if (require.main === module) {

  console.log("This is the main module");

  console.log("\n");
  
  assertArraysEqual([[1, 2, 3], [1, 3, 3]], true); // => should PASS
  assertArraysEqual([[1, 2, 3], [1, 2, 3]], true); // => should PASS
  assertArraysEqual([[1, 2, 3], [1, 2, 3]], false); // => should PASS
  assertArraysEqual([[1, 2, 3], [1, 3, 3]], false); // => should PASS
  
  console.log("\n");
  
  assertArraysEqual(([1, 2, 3], [1, 3, 3]), true); // => should PASS
  assertArraysEqual(([1, 2, 3], [1, 2, 3]), true); // => should PASS

}

