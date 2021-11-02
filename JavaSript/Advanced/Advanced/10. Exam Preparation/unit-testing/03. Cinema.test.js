const { expect } = require('chai');
const { cinema } = require('./03. Cinema');

describe('Cinema Tests:', () => {
    describe('showMovies', () => {
        it('checks if function is working as expected', () => {
            expect(cinema.showMovies(['Movie 01', 'Movie 02', 'Movie 03'])).to.equal('Movie 01, Movie 02, Movie 03');
        });

        it('checks return if array is empty', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });

        it('check if params are numbers', () => {
            expect(cinema.showMovies([1, 2])).to.equal('1, 2');
        });
    });

    describe('ticketPrice', () => {
        it('checks if function is working as expected', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        });

        it('checks for error if we give non-existing ticket type', () => {
            expect(() => { cinema.ticketPrice('Test'); }).to.throw('Invalid projection type.');
        });
    });

    describe('swapSeatsInHall', () => {
        it('checks if function is working as expected', () => {
            expect(cinema.swapSeatsInHall(1, 20)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(20, 1)).to.equal('Successful change of seats in the hall.');
        });

        it('checks if param 1 is 0 or bellow; returns error', () => {
            expect(cinema.swapSeatsInHall(0, 1)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('checks if param 2 is 0 or bellow; returns error', () => {
            expect(cinema.swapSeatsInHall(1, 0)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('checks if param 1 is more than 20 seats; returns error', () => {
            expect(cinema.swapSeatsInHall(21, 1)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('checks if param 2 is more than 20 seats; returns error', () => {
            expect(cinema.swapSeatsInHall(1, 21)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('checks if param 1 is string; returns error', () => {
            expect(cinema.swapSeatsInHall('1', 2)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('checks if param 2 is string; returns error', () => {
            expect(cinema.swapSeatsInHall(1, '2')).to.equal('Unsuccessful change of seats in the hall.');
        });
    });
});