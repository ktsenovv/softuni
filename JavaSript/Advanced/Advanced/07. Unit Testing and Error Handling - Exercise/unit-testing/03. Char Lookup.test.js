const { expect } = require('chai');
const { lookupChar } = require('./03. Char Lookup');

describe('Char Lookup tests:', () => {
    it('returns the char at the specified index', () => {
        expect(lookupChar('test', 1)).to.equal('e');
    });

    it('returns the char at the specified index', () => {
        expect(lookupChar('test', 3)).to.equal('t');
    });

    it('returns undefined if the first parameter is not a string', () => {
        expect(lookupChar(135, 0)).to.be.undefined;
    });

    it('returns undefined if the second parameter is not a number', () => {
        expect(lookupChar('135', '0')).to.be.undefined;
    });

    it('returns incorrect index if number is out of range', () => {
        expect(lookupChar('sub-zero', -1)).to.equal('Incorrect index');
    });

    it('returns incorrect index if number is out of range', () => {
        expect(lookupChar('sub-zero', 9)).to.equal('Incorrect index');
    });

    it('returns undefined if the second parameter is a floating-point number', () => {
        expect(lookupChar('test', 1.5)).to.be.undefined;
    });
});