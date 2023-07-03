// MODULE IMPORT
const tail = require('../tail');
const assertEqual = require('../assertEqual');

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);
assertEqual(result, ["Lighthouse", "Labs"]);


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!