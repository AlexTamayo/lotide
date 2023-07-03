const middle = function(array) {
  const resultArray = [];

  if (array.length <= 2) {
    return resultArray;
  }

  if (array.length % 2 === 0) {
    const calcIndex = Math.floor(array.length / 2);

    resultArray.push(array[calcIndex - 1]);
    resultArray.push(array[calcIndex]);

    return resultArray;

  } else {
    const calcIndex = Math.floor(array.length / 2);
    resultArray.push(array[calcIndex]);

    return resultArray;
  }

};

// MODULE EXPORT
module.exports = middle;