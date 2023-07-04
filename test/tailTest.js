// MODULE IMPORT
const tail = require('../tail');
// const assertEqual = require('../assertEqual');
const assert = require('chai').assert;


// TEST CODE
describe('#tail', () => {

  it('should return all the elements except for first one.\nInput: ["Hello", "Lighthouse", "Labs"], Expected output: ["Lighthouse", "Labs"]', () => {
    const input = ["Hello", "Lighthouse", "Labs"];
    const expectedOutput = ["Lighthouse", "Labs"];
    assert.deepEqual(tail(input), expectedOutput);
  });
  
  it('should return all the elements except for first one.\nInput: ["Hello", "Lighthouse", "Labs"], Expected output: ["Lighthouse", "Labs"]', () => {
    const input = ["Yo Yo", "Lighthouse", "Labs"];
    const expectedOutput = ["Lighthouse", "Labs"];
    assert.deepEqual(tail(input), expectedOutput);
  });
  
  it('should return all the elements except for first one.\nInput: [1], Expected output: []', () => {
    const input = [1];
    const expectedOutput = [];
    assert.deepEqual(tail(input), expectedOutput);
  });
  
});