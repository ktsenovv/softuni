const { expect } = require('chai');
const { rgbToHexColor } = require('./06. RGB to Hex');

describe('RGB to Hex Converter', () => {
    describe('Happy path', () => {
        it('convert white color', () => {
            expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
        });

        it('convert blue color', () => {
            expect(rgbToHexColor(0, 0, 255)).to.be.equal('#0000FF');
        });

        it('convert black color', () => {
            expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
        });
    });

    describe('Invalid parameters', () => {
        it('returns undefined for missing parameters', () => {
            expect(rgbToHexColor(255)).to.be.undefined;
        });

        it('returns undefined for invalid parameter type', () => {
            expect(rgbToHexColor('0', '0', '0')).to.be.undefined;
        });

        describe('Out of range (Negative)', () => {
            it('returns undefined for R value out of range', () => {
                expect(rgbToHexColor(-1, 255, 255)).to.be.undefined;
            });

            it('returns undefined for G value out of range', () => {
                expect(rgbToHexColor(255, -1, 255)).to.be.undefined;
            });

            it('returns undefined for B value out of range', () => {
                expect(rgbToHexColor(255, 255, -1)).to.be.undefined;
            });

            it('returns undefined for all values out of range', () => {
                expect(rgbToHexColor(-1, -1, -1)).to.be.undefined;
            });
        });

        describe('Out of range (Positive)', () => {
            it('returns undefined for R value out of range', () => {
                expect(rgbToHexColor(256, 1, 1)).to.be.undefined;
            });

            it('returns undefined for G value out of range', () => {
                expect(rgbToHexColor(1, 256, 1)).to.be.undefined;
            });

            it('returns undefined for B value out of range', () => {
                expect(rgbToHexColor(1, 1, 256)).to.be.undefined;
            });

            it('returns undefined for all values out of range', () => {
                expect(rgbToHexColor(256, 256, 256)).to.be.undefined;
            });
        });
    });
});