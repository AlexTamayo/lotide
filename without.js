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

const without = function(source, itemsToRemove) {
  let newArray = [];

  for (let x of source) {
    let shouldAdd = true;

    for (let y of itemsToRemove) {
      if (x === y) {
        shouldAdd = false;
        break;
      }
    }
    if (shouldAdd) {
      newArray.push(x);
    }
  }
  console.log(newArray);
  return newArray;
};


// TEST CODE
if (require.main === module) {

  console.log("This is the main module");

  without([1, 2, 3], [1]); // => [2, 3]

  without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
  
  const words = ["hello", "world", "lighthouse"];
  without(words, ["lighthouse"]); // no need to capture return value for this test case
  // Make sure the original array was not altered by the without function
  assertArraysEqual(words, ["hello", "world", "lighthouse"]);

}

