// Archivo `isVowel.spec.js`:
 
const assert = require('assert');
const isVowel = require('./isVowel');

const assertEqual = (value, expected) => {
  if (value !== expected) {
    throw new Error(`Expected '${value}' to equal '${expected}'`);
  }
};

describe('isVowel()', () => {

  it('debería devolver true para letra a', () => {
    assert.equal(isVowel('a'), true);
  });

  it('debería devolver false para letra a', () => {
    assert.equal(isVowel('b'), false);
  });

});