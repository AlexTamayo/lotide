const head = function(array) {
  return array[0];
};

// MODULE EXPORT
module.exports = head;

// TEST CODE
if (require.main === module) {

  console.log(`This is the main module\n`);

}