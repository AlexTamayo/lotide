const without = function(source, itemsToRemove) {
  let newArray = [];

  for (let x of source) {
    let shouldAdd = true;

    for (let y of itemsToRemove) {
      if (x === y) {
        shouldAdd = false;
        break;
      }
    }
    if (shouldAdd) {
      newArray.push(x);
    }
  }
  console.log(newArray);
  return newArray;
};

// MODULE EXPORT
module.exports = without;


// TEST CODE
if (require.main === module) {

  console.log(`This is the main module\n`);

}
