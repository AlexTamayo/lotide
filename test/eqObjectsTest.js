// MODULE IMPORT
const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');


// TEST CODE
console.log("\n");

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const test1 = eqObjects(shirtObject , anotherShirtObject); // => true
assertEqual(test1, true);

console.log("\n");

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const test2 = eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(test2, false);

console.log("\n");

const test3 = eqObjects(longSleeveShirtObject, shirtObject); // => false
assertEqual(test3, false);

console.log("\n");

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const test4 = eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertEqual(test4, true);

console.log("\n");

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
const test5 = eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertEqual(test5, false);

console.log("\n");

const multiColorShirtObject1 = { colors: ["red", "blue"], size: "medium", something: ["this", "is"]};
const anotherMultiColorShirtObject1 = { something: ["this", "is", "one"], size: "medium", colors: ["red", "blue"] };
const test6 = eqObjects(multiColorShirtObject1  , anotherMultiColorShirtObject1); // => false
assertEqual(test6, false);