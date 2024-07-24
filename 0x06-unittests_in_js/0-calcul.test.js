const calculateNumber = require('./0-calcul.js');
const assert = require('assert');
const mocha = require('mocha');


describe('calculateNumber', () => {
    it ('return the sum', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1.1, 3.1), 4);
        assert.strictEqual(calculateNumber(1.4, 3.4), 5);
        assert.strictEqual(calculateNumber(1.5, 3.5), 5);
        assert.strictEqual(calculateNumber(1.6, 3.6), 6);
        assert.strictEqual(calculateNumber(1.9, 3.9), 6);
    });
    it ('check arguments' () => {
        assert.strictEqual(isNaN(calculateNumber(1)), true);
        assert.strictEqual(isNaN(calculateNumber()), true);
    });
});
