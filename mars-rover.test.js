const {
    returnsSomething,
    checkPlateau
} = require("./mars-rover");

describe('Initial set-up', () => {
    test('Jest is working', () => {
        expect(1).toBe(1);
    });
    test('Test file is connected to project file', () => {
        expect(returnsSomething()).toBe(true);
    });
});

// Test Input:
// 1. Upper-right coordinate of the plateau: 5 5
// (Lower-left coordinate assumed to be: 0 0)
// 2. Rovers current position
// 3. Rover instructions

// Things to test / think about:

// The Plateau
// The first line of input is the upper-right coordinates of the plateau 
// - Check is 5,5
// If greater than 5 or less than 0 fail (as Rover has landed on the wrong plateau!)

// The Initial Position
// An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North. 
// Assume that the square directly North from (x, y) is (x, y+1)
// The position is made up of two integers - check integers (not string or decimal)

// The Direction/s && Instructions
// Each rover has two lines of input - check has 2 and not null
// The first line gives the rover's position - check it has a position / this is valid 
// second line is a series of instructions
// The possible letters are 'L', 'R' and 'M'. 
// 'M' means move forward one grid point - and maintain the same heading.

// The Final Position
// produces expected outputs
// Not string or decimal
// Has a direction
// Is not off the side of the plateau floating in space

// Check for Collisions
// with other Rovers

describe('Check is the correct plateau', () => {
    test('Upper-right coordinates of the plateau are 5, 5', () => {
        expect(checkPlateau(5, 5)).toBe(true); 
        expect(checkPlateau(1, 3)).toBe(false); 
        expect(checkPlateau("5", "5")).toBe(false); 
        expect(checkPlateau(0, 0)).toBe(false); 
        expect(checkPlateau(5, 6)).toBe(false); 
    });
});


