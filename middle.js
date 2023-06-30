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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const middle = function(array) {
  const resultArray = [];

  if (array.length <= 2) {
    return resultArray;
  }

  if (array.length % 2 === 0) {
    const calcIndex = Math.floor(array.length / 2);

    resultArray.push(array[calcIndex - 1]);
    resultArray.push(array[calcIndex]);

    return resultArray;

  } else {
    const calcIndex = Math.floor(array.length / 2);
    resultArray.push(array[calcIndex]);

    return resultArray;
  }

};


// TEST CODE
if (require.main === module) {

  console.log("This is the main module");

  console.log(middle([1])); // => []
  assertArraysEqual(middle([1]), []);

  console.log(middle([1, 2])); // => []
  assertArraysEqual(middle([1, 2]), []);
  
  console.log(middle([1, 2, 3])); // => [2]
  assertArraysEqual(middle([1, 2, 3]), [2]);
  
  console.log(middle([1, 2, 3, 4, 5])); // => [3]
  assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
  
  console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9])); // => [5]
  assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]);
  
  console.log(middle([1, 2, 3, 4])); // => [2, 3]
  assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
  
  console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
  assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  
  console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])); // => [6, 7]
  assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), [6, 7]);

}