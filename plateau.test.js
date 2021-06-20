const {
    checkPlateau,
    checkMoveIsSafe
} = require("./plateau");



describe('Check is a valid plateau', () => {
    // refactor by adding min and max variables (incase future rovers can go underneath or down the side of plateaus)?
    // let minSize = 0; 
    // let maxSize = 5; 

    test('Check co-ordinates are not 0', () => {
        expect(() => checkPlateau('0 0')).toThrow("Error: x and y co-ordinates must be greater than 0");
        expect(() => checkPlateau('0 5')).toThrow("Error: x and y co-ordinates must be greater than 0");
    });
    test('Check co-ordinates are not less than 0', () => {
        expect(() => checkPlateau('-1 -5')).toThrow("Error: x and y co-ordinates must be greater than 0");
        expect(() => checkPlateau('-1 -10')).toThrow("Error: x and y co-ordinates must be greater than 0");
    });
    test('Check co-ordinates are numbers', () => {
        expect(() => checkPlateau("donkey melon")).toThrow("Error: x and y co-ordinates must be numbers");
    });
    const validPlateau = '5 5';
    it('returns co-ordinates as an array if valid plateau co-ordinates have been received', () => {
        expect(checkPlateau(validPlateau)).toEqual([5, 5]);
    });
});

describe('Check move is safe', () => {

    let rover = {
        x: 0,
        y: 0, 
        direction: 'W', 
        plateau: [5, 5]
    }

    test('If move sends rover off plateau edge, throw error', () => {
        expect(() => checkMoveIsSafe(rover)).toThrow("Error: rover is about to fall off edge of plateau");
    });

    let rover2 = {
        x: 5,
        y: 5, 
        direction: 'W', 
        plateau: [5, 5]
    }

    test('If move sends rover off plateau edge, throw error', () => {
        expect(() => checkMoveIsSafe(rover2)).toThrow("Error: rover is about to fall off upper right edge of plateau");
    });
});