/*
We'll implement a new function letterPositions which will
return all the indices (zero-based positions) in the string where each character is found.

For each letter, instead of returning just one number to represent its number of occurrences,
multiple numbers may be needed to represent all the places in the string that it shows up.

INPUT
  string

FLOW
  Go through string
  Every time the string is found add the index to the value array of that letter

OUTPUT
  object with each letter as key and index of where it's located as an array as their respective value
*/

const letterPositions =  function(string) {
  let result = {};

  for (let index in string) {
    if (string[index] !== ' ') {
      if (string[index] in result) {
        result[string[index]].push(Number(index));
      } else {
        result[string[index]] = [Number(index)];
      }
    }
  }
  return result;
};


// TEST CODE
if (require.main === module) {

  const sampleOutput = {
    l: [0],
    i: [1, 11],
    g: [2],
    h: [3, 5, 15, 18],
    t: [4, 14],
    o: [6, 19],
    u: [7, 20],
    s: [8, 21],
    e: [9, 16, 22],
    n: [12]
  };

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
    
  console.log(letterPositions("lighthouse in the house"));
  console.log(sampleOutput);
  console.log(letterPositions("hello"));

  assertArraysEqual(letterPositions("hello")["l"], [2, 3]);
  assertArraysEqual(letterPositions("lighthouse in the house")["h"], [3, 5, 15, 18]);

  

}
