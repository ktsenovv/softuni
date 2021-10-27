const { expect } = require('chai');
const { sum } = require('./sumofnumbers');

describe('Sum checker', () => {
    it('to be NaN', () => {
        expect(sum([1, 2, 3, 'test'])).to.be.NaN;
    });

    it('to equal 6', () => {
        expect(sum([1, 2, 3])).to.equal(6);
    });

    it('to equal 0', () => {
        expect(sum([])).to.equal(0);
    });
});