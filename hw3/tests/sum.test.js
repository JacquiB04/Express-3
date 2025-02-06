//An author: Jacqui Bouchard
//This file is used for learning how to do unit tests with Jest
//Tests the sume function in sum.js
const sum = require('../public/javascripts/sum.js');
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});