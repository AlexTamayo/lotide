const countLetters = function(string) {

  let results = {};

  for (let item of string) {
    if (item !== ' ') {
      // console.log(`${item} is not ' '`);
      if (item in results) {
        
        results[item] += 1;
      } else {

        results[item] = 1;
      }
    }
  }
  // console.log(results);
  return results;
};


//TEST CODE
if (require.main === module) {

  console.log("This is the main module");

  const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };

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

  // assertEqual(testRun, testResult);
}