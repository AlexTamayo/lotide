const eqArrays = function(array1, array2) {
  let condition = false;
  if (array1.length === 0) {
    if (array2.length === 0) {
      return condition = true;
    }
  } else {
    for (let i in array1) {
      if (array1[i] !== array2[i]) {
        return false;
      } else {
        condition = true;
      }
    }
    return condition;
    
  }
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};


// TEST CODE
if (require.main === module) {

  console.log("This is the main module");

  console.log("\n");
  
  assertArraysEqual([1, 2, 3], [1, 3, 3]); // => false
  assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
  assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
  assertArraysEqual([1, 2, 3], [1, 3, 3]); // => false
  
  console.log("\n");
}


