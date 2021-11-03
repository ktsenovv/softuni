const { expect } = require('chai');
const { library } = require('./03. Problem');

describe('Library Tests:', () => {
    describe('calcPriceOfBook', () => {
        it('checks if function is working as expected', () => {
            expect(library.calcPriceOfBook('nameOfBook', 2000)).to.equal('Price of nameOfBook is 20.00');
            expect(library.calcPriceOfBook('nameOfBook2', 1980)).to.equal('Price of nameOfBook2 is 10.00');
        });

        it('throws error if param 1 is other than string', () => {
            expect(() => { library.calcPriceOfBook(1, 2000); }).to.throw('Invalid input');
        });

        it('throws error if param 2 is other than integer', () => {
            expect(() => { library.calcPriceOfBook('nameOfBook', '2000'); }).to.throw('Invalid input');
        });
    });

    describe('findBook', () => {
        it('checks if function is working as expected', () => {
            expect(library.findBook(['nameOfBook', 'nameOfBook2', 'nameOfBook3'], 'nameOfBook2')).to.equal('We found the book you want.');
            expect(library.findBook(['nameOfBook', 'nameOfBook2', 'nameOfBook3'], 'nameOfBook4')).to.equal('The book you are looking for is not here!');
        });

        it('throws error if array is empty', () => {
            expect(() => { library.findBook([], 'nameOfBook'); }).to.throw('No books currently available');
        });
    });

    describe('arrangeTheBooks', () => {
        it('checks if function is working as expected', () => {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        });

        it('throws error if param is other than integer', () => {
            expect(() => { library.arrangeTheBooks('1'); }).to.throw('Invalid input');
        });

        it('throws error if param is negative number', () => {
            expect(() => { library.arrangeTheBooks(-1); }).to.throw('Invalid input');
        });
    });
});