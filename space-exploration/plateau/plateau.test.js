const {
    createPlateau
} = require("../modules");


describe('Check is a valid plateau', () => {

    test('Check co-ordinates are not 0', () => {
        expect(() => createPlateau('0 0')).toThrow("Error: x and y co-ordinates must be greater than 0");
        expect(() => createPlateau('0 5')).toThrow("Error: x and y co-ordinates must be greater than 0");
    });
    test('Check co-ordinates are not less than 0', () => {
        expect(() => createPlateau('-1 -5')).toThrow("Error: x and y co-ordinates must be greater than 0");
        expect(() => createPlateau('-1 -10')).toThrow("Error: x and y co-ordinates must be greater than 0");
    });
    test('Check co-ordinates are numbers', () => {
        expect(() => createPlateau("donkey melon")).toThrow("Error: x and y co-ordinates must be numbers");
    });
    const validPlateau = '5 5';
    it('returns co-ordinates as an array if valid plateau co-ordinates have been received', () => {
        expect(createPlateau(validPlateau)).toEqual([5, 5]);
    });
});

