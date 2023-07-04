// MODULE IMPORT
// const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert;



// TEST CODE

describe("#middle", () => {

  it("should return '[]' if only 1 element is in input array.\nInput: [9], Expected output: []", () => {
    const input = [9];
    const expectedOutput = [];
    assert.deepEqual(middle(input), expectedOutput);
  });
  
  it("should return '[]' if only 2 element is in input array.\nInput: [1, 2], Expected output: []", () => {
    const input = [1, 2];
    const expectedOutput = [];
    assert.deepEqual(middle(input), expectedOutput);
  });
  
  it("should return '[middle #]' if # elements is greater than 3 and an odd number.\nInput: [1, 2, 3], Expected output: [2]", () => {
    const input = [1, 2, 3];
    const expectedOutput = [2];
    assert.deepEqual(middle(input), expectedOutput);
  });
  
  it("should return '[middle #]' if # elements is greater than 3 and an odd number.\nInput: [1, 2, 3, 4, 5], Expected output: [3]", () => {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput = [3];
    assert.deepEqual(middle(input), expectedOutput);
  });
  
  it("should return '[middle #]' if # elements is greater than 3 and an odd number.\nInput: [1, 2, 3, 4, 5, 6, 7, 8, 9], Expected output: [5]", () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const expectedOutput = [5];
    assert.deepEqual(middle(input), expectedOutput);
  });
  
  it("should return '[2 middle]' if # elements is greater than 3 and an even number.\nInput: [1, 2, 3, 4], Expected output: [2, 3]", () => {
    const input = [1, 2, 3, 4];
    const expectedOutput = [2, 3];
    assert.deepEqual(middle(input), expectedOutput);
  });
  
  it("should return '[2 middle]' if # elements is greater than 3 and an even number.\nInput: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], Expected output: [6, 7]", () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const expectedOutput = [6, 7];
    assert.deepEqual(middle(input), expectedOutput);
  });

});