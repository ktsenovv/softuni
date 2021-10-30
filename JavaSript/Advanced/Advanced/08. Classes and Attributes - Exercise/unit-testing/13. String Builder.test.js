const { expect } = require('chai');
const StringBuilder = require('./13. String Builder');

describe('StringBuilder Class tests:', () => {
    describe('Constructor', () => {
        it('can be instantiated with string param', () => {
            expect(new StringBuilder('test').toString()).to.equal('test');
        });

        it('can be instantiated without param', () => {
            expect(new StringBuilder().toString()).to.equal('');
        });

        it('cannot be instantiated with number', () => {
            expect(() => new StringBuilder(1)).to.throw('Argument must be a string');
        });

        it('cannot be instantiated with NaN', () => {
            expect(() => new StringBuilder(NaN)).to.throw('Argument must be a string');
        });

        it('cannot be instantiated with array', () => {
            expect(() => new StringBuilder(['test'])).to.throw('Argument must be a string');
        });

        it('cannot be instantiated with object', () => {
            expect(() => new StringBuilder({ test: 'test' })).to.throw('Argument must be a string');
        });
    });

    describe('Append', () => {
        it('can add string at the end', () => {
            let inst = new StringBuilder('test');
            inst.append('lol');
            expect(inst.toString()).to.equal('testlol');
        });

        it('cannot be called with number', () => {
            expect(() => new StringBuilder('test').append(1)).to.throw('Argument must be a string');
        });
    });

    describe('Prepend', () => {
        it('can add string at the start', () => {
            let inst = new StringBuilder('test');
            inst.prepend('lol');
            expect(inst.toString()).to.equal('loltest');
        });

        it('cannot be called with number', () => {
            expect(() => new StringBuilder('test').prepend(1)).to.throw('Argument must be a string');
        });
    });

    describe('InsertAt', () => {
        it('can insert string at specific index', () => {
            let inst = new StringBuilder('test');
            inst.insertAt('lol', 2);
            expect(inst.toString()).to.equal('telolst');
        });

        it('cannot be called with first param - number', () => {
            expect(() => new StringBuilder('test').insertAt(1, 2)).to.throw('Argument must be a string');
        });
    });

    describe('Remove', () => {
        it('can remove chars from index to index', () => {
            let inst = new StringBuilder('test');
            inst.remove(1, 2);
            expect(inst.toString()).to.equal('tt');
        });
    });

    describe('ToString', () => {
        it('works correctly', () => {
            let inst = new StringBuilder('hello');
            inst.append(', there');
            inst.prepend('User, ');
            inst.insertAt('woop', 5);
            inst.remove(6, 3);
            expect(inst.toString()).to.equal('User,w hello, there');
        });
    });
});