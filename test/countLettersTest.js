// MODULE IMPORT
const countLetters = require('../countLetters');
const assertEqual = require('../assertEqual');

//TEST CODE
const testResult = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};

const testRun = countLetters("lighthouse in the house");

console.log(testRun);
console.log(testResult);

assertEqual(testRun["h"], testResult["h"]);