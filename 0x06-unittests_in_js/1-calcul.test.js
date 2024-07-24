const calculateNumber = require('./1-calcul.js');
const assert = require('assert');


describe('calculateNumber type == SUM', () => {
    it ('return the sum', () => {
        assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
        assert.strictEqual(calculateNumber('SUM', 1.1, 3.1), 4);
        assert.strictEqual(calculateNumber('SUM', 1.4, 3.4), 5);
        assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });
});
describe('calculateNumber type == SUBTRACT', () => {
    it ('return the difference', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 5, 3), 2);
        assert.strictEqual(calculateNumber('SUBTRACT', 4.1, 3.5), 0);
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3.4), -2);
        assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    });
});
describe('calculateNumber type == DIVIDE', () => {
    it ('return the division', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 5, 3), 2);
        assert.strictEqual(calculateNumber('DIVIDE', 4.1, 3.5), 1);
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 3.4), 0);
        assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
    });
});
