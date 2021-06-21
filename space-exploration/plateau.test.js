const {
    createPlateau
} = require("./plateau");

const {
    
    checkMoveIsSafe
} = require("./modules")



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

describe('Check move is safe', () => {

    const rover = {
        x: 0,
        y: 0, 
        direction: 'W', 
        plateau: [5, 5]
    }

    test('If move sends rover off plateau edge, throw error', () => {
        expect(() => checkMoveIsSafe(rover)).toThrow("Error: rover is about to fall off left edge of plateau");
    });

    const rover2 = {
        x: 5,
        y: 5, 
        direction: 'N', 
        plateau: [5, 5]
    }

    test('If move sends rover off plateau edge, throw error', () => {
        expect(() => checkMoveIsSafe(rover2)).toThrow("Error: rover is about to fall off right edge of plateau");
    });

    const rover3 = {
        x: 2,
        y: 3, 
        direction: 'W', 
        plateau: [5, 5]
    }

    test('If move is safe, return "Safe"', () => {
        expect(checkMoveIsSafe(rover3)).toBe("Safe");
    });
});