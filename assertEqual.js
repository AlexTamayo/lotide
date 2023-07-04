const assertEqual = function(actual, expected) {
  if (!(actual === expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

// MODULE EXPORT
module.exports = assertEqual;

// TEST CODE
if (require.main === module) {

  console.log(`This is the main module\n`);

}