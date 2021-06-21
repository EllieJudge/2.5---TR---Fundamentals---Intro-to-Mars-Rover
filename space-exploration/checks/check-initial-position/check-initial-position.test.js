const {
    checkInitialPosition
} = require("../../modules")

describe('Check rovers initial position', () => {

    test('Has initial position', () => {
        expect(() => checkInitialPosition()).toThrow("Error: rover must have initial position");
    });

    const plateau = [5, 5]

    test('Throws error if initial position is not valid', () => {
        expect(() => checkInitialPosition('1 2 X', plateau)).toThrow("Error: must have N, S, E or W direction");
        expect(() => checkInitialPosition('1 2 Peanuts', plateau)).toThrow("Error: must have N, S, E or W direction");
        expect(() => checkInitialPosition('1 2 ', plateau)).toThrow("Error: must have x co-ordinates, y co-ordinates and direction");
        expect(() => checkInitialPosition('N', plateau)).toThrow("Error: must have x co-ordinates, y co-ordinates and direction");
    });

    test('Throws error if initial position is not on the plateau', () => {
        expect(() => checkInitialPosition('9 6 N', plateau)).toThrow("Error: you've missed the plateau!");
        expect(() => checkInitialPosition('1 7 W', plateau)).toThrow("Error: you've missed the plateau!");
        expect(() => checkInitialPosition('9 0 S', plateau)).toThrow("Error: you've missed the plateau!");
        expect(() => checkInitialPosition('7 6 N', [6, 6])).toThrow("Error: you've missed the plateau!");
        expect(() => checkInitialPosition('3 14 N', [3, 13])).toThrow("Error: you've missed the plateau!");
        expect(() => checkInitialPosition('4 13 N', [3, 13])).toThrow("Error: you've missed the plateau!");
    });

    // Throws error if rover has landed on another rover (checkForCollisions)

    test('It returns correct position even if direction passed is lowercase', () => {
        expect(checkInitialPosition('1 2 n', plateau)).toEqual([1, 2, 'N']);
        expect(checkInitialPosition('2 2 s', plateau)).toEqual([2, 2, 'S']);
        expect(checkInitialPosition('5 2 w', plateau)).toEqual([5, 2, 'W']);
    });

    test('If initial position is valid, position is returned as an array', () => {
        expect(checkInitialPosition('1 2 N', plateau)).toEqual([1, 2, 'N']);
        expect(checkInitialPosition('1 5 E', plateau)).toEqual([1, 5, 'E']);
        expect(checkInitialPosition('5 5 W', plateau)).toEqual([5, 5, 'W']);
        expect(checkInitialPosition('0 1 S', plateau)).toEqual([0, 1, 'S']);
    });

});
