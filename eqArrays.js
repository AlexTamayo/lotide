const eqArrays = function(array1, array2) {
  if (array1.length === 0 && array2.length === 0) {
    return true;
  }
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i in array1) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};

// MODULE EXPORT
module.exports = eqArrays;