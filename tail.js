const tail = function(array) {
  return array.slice(1);
};

// MODULE EXPORT
module.exports = tail;

// TEST CODE
if (require.main === module) {

  console.log(`This is the main module\n`);

}