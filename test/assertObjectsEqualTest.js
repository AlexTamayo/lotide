// MODULE IMPORT
const assertObjectsEqual = require('../assertObjectsEqual');

// TEST CODE
console.log("This is the main module");

const object1 = { a: '1', b: 2 };

const object2 = { b: 2, a: '1' };

assertObjectsEqual(object1, object2);