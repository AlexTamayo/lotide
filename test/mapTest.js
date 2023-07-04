// MODULE IMPORT
const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');


// TEST CODE
const words = ["ground", "control", "to", "major", "tom"];
const test1 = ['g', 'c', 't', 'm', 't'];

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, test1);