const { expect } = require('chai');
const { isOddOrEven } = require('./02. Even Or Odd');

describe('Even Or Odd tests:', () => {
    describe('Happy path:', () => {
        it('expects string to equal even', () => {
            expect(isOddOrEven('test')).to.equal('even');
        });

        it('expects string to equal odd', () => {
            expect(isOddOrEven('subzero')).to.equal('odd');
        });

        it('works with multiple calls', () => {
            expect(isOddOrEven('mortal kombat')).to.equal('odd');
            expect(isOddOrEven('scorpion')).to.equal('even');
            expect(isOddOrEven('johny kage')).to.equal('even');
        });
    });

    describe('Invalid parameter:', () => {
        it('expects result to be undefined', () => {
            expect(isOddOrEven(123)).to.be.undefined;
        });

        it('expects result to be undefined', () => {
            expect(isOddOrEven(NaN)).to.be.undefined;
        });
    });
});