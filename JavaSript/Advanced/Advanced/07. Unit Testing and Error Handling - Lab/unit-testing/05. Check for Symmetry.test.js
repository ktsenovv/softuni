const { expect } = require('chai');
const { isSymmetric } = require('./05. Check for Symmetry');

describe('Symmetry checker', () => {
    it('return true for symmetric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('return false for non-symmetric array', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it('return false for non-array', () => {
        expect(isSymmetric(5)).to.be.false;
    });

    it('return false for type-different symmetric array', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.false;
    });
});