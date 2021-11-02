const { expect } = require('chai');
const { testNumbers } = require('./03. Test Numbers');

describe('Numbers Tests:', () => {
    describe('sumNumber', () => {
        it('checks if function is working as expected', () => {
            expect(testNumbers.sumNumbers(1, 2)).to.equal('3.00');
        });

        it('checks sum with positive and negative', () => {
            expect(testNumbers.sumNumbers(1, -2)).to.equal('-1.00');
        });

        it('checks sum with negative and positive', () => {
            expect(testNumbers.sumNumbers(-2, 1)).to.equal('-1.00');
        });

        it('checks if first param is not number', () => {
            expect(testNumbers.sumNumbers('1', 2)).to.be.undefined;
        });

        it('checks if second param is not number', () => {
            expect(testNumbers.sumNumbers(1, '2')).to.be.undefined;
        });
    });

    describe('numberChecker', () => {
        it('checks if the number is even', () => {
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
        });

        it('checks if the number is odd', () => {
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
        });

        it('checks if the string number is even', () => {
            expect(testNumbers.numberChecker('2')).to.equal('The number is even!');
        });

        it('checks if the string number is odd', () => {
            expect(testNumbers.numberChecker('1')).to.equal('The number is odd!');
        });

        it('checks if the emptry array is odd', () => {
            expect(testNumbers.numberChecker([])).to.equal('The number is even!');
        });

        it('checks if no params throw error', () => {
            expect(() => { testNumbers.numberChecker(); }).to.throw('The input is not a number!');
        });
    });

    describe('averageSumArray', () => {
        it('checks if sum of the array is correct', () => {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
        });

        it('checks if sum of the array is correct', () => {
            expect(testNumbers.averageSumArray([-5, 10, 15])).to.be.closeTo(6.66, 1.1);
        })

        it('checks if empty array returns NaN', () => {
            expect(testNumbers.averageSumArray([])).to.be.NaN;
        });
    });
});