const countLetters = function(string) {

  let results = {};

  for (let item of string) {
    if (item !== ' ') {
      if (item in results) {
        
        results[item] += 1;
      } else {

        results[item] = 1;
      }
    }
  }
  return results;
};

// MODULE EXPORT
module.exports = countLetters;

// TEST CODE
if (require.main === module) {

  console.log(`This is the main module\n`);

}