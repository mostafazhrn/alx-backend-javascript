const calculateNumber = require('./0-calcul.js');
const assert = require('assert');
const mocha = require('mocha');


describe('calculateNumber', () => {
    it('return the sum', () => {
      assert.strictEqual(calculateNumber(1, 3), 4);
      assert.strictEqual(calculateNumber(1, 3.7), 5);
      assert.strictEqual(calculateNumber(1.2, 3.7), 5);
      assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
    it('check arguments', () => {
      assert.strictEqual(isNaN(calculateNumber(1)), true);
      assert.strictEqual(isNaN(calculateNumber()), true);
    });
});
