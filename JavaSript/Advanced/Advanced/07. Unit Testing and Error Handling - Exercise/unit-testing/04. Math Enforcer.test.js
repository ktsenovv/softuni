const { expect } = require('chai');
const { mathEnforcer } = require('./04. Math Enforcer');

describe('Math Enforcer tests:', () => {
    it('has all methods', () => {
        expect(mathEnforcer).to.has.ownProperty('addFive');
        expect(mathEnforcer).to.has.ownProperty('subtractTen');
        expect(mathEnforcer).to.has.ownProperty('sum');
    });

    describe('addFive tests', () => {
        it('addFive to number', () => {
            expect(mathEnforcer.addFive(0)).to.equal(5);
        });

        it('addFive to negative number', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });

        it('addFive to floating-point number', () => {
            expect(mathEnforcer.addFive(5.5)).to.be.closeTo(10.5, 0.01);
        });

        it('addFive multiple times', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
            expect(mathEnforcer.addFive(10)).to.equal(15);
            expect(mathEnforcer.addFive(15)).to.equal(20);
        });

        it('addFive to string, returns undefined', () => {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
        });
    });

    describe('subtractTen tests', () => {
        it('subtractTen from number', () => {
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
        });

        it('subtractTen from negative number', () => {
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
        });

        it('subtractTen from floating-point number', () => {
            expect(mathEnforcer.subtractTen(15.5)).to.be.closeTo(5.5, 0.01);
        });

        it('subtractTen multiple times', () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
            expect(mathEnforcer.subtractTen(15)).to.equal(5);
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
        });

        it('subtractTen from string, returns undefined', () => {
            expect(mathEnforcer.subtractTen('5')).to.be.undefined;
        });
    });

    describe('sum tests', () => {
        it('sum 2 numbers', () => {
            expect(mathEnforcer.sum(5, 10)).to.equal(15);
        });

        it('sum number and negative number', () => {
            expect(mathEnforcer.sum(5, -5)).to.equal(0);
        });

        it('sum negative number and number', () => {
            expect(mathEnforcer.sum(-5, 10)).to.equal(5);
        });

        it('sum number and floating-point number', () => {
            expect(mathEnforcer.sum(5, 5.678)).to.be.closeTo(10.678, 0.01);
        });

        it('sum floating-point number and floating-point number', () => {
            expect(mathEnforcer.sum(5.321, 5.678)).to.be.closeTo(10.999, 0.01);
        });

        it('sum number and string, returns undefined', () => {
            expect(mathEnforcer.sum(5, '5')).to.be.undefined;
        });

        it('sum string and number, returns undefined', () => {
            expect(mathEnforcer.sum('5', 5)).to.be.undefined;
        });

        it('sum without parameters, returns undefined', () => {
            expect(mathEnforcer.sum()).to.be.undefined;
        });

        it('sum with 1 parameter, returns undefined', () => {
            expect(mathEnforcer.sum(5)).to.be.undefined;
        });
    });
});