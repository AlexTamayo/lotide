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

// MODULE EXPORT
module.exports = letterPositions;

// TEST CODE
if (require.main === module) {

  console.log(`This is the main module\n`);

}
