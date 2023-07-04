// MODULE IMPORT
const letterPositions = require('../letterPositions');
const assertArraysEqual = require('../assertArraysEqual');


// TEST CODE
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
  
console.log(letterPositions("lighthouse in the house"));
console.log(sampleOutput);
console.log(letterPositions("hello"));

assertArraysEqual(letterPositions("hello")["l"], [2, 3]);
assertArraysEqual(letterPositions("lighthouse in the house")["h"], [3, 5, 15, 18]);