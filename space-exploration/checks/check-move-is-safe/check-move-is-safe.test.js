const {
    checkMoveIsSafe
} = require("../../modules")


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