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
  
  
  console.log(letterPositions("lighthouse in the house"));
  console.log(sampleOutput);
  console.log(letterPositions("hello"));

}
