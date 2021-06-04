const {
    returnsSomething,
    checkPlateau,
    checkInitialPosition,
    checkInstructions,
    changeDirection,
    moveForwards
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

// The Final Position
// produces expected outputs
// Not string or decimal
// Has a direction
// Is not off the side of the plateau floating in space

// Check for Collisions
// with other Rovers

// Arrange - set up ingredients to create test 
// Assertion - what you are checking for? Expected result vs actual result
// Action - call the method


// The Plateau
// The first line of input is the upper-right coordinates of the plateau 
// - Check min, 0,0 

describe('Check is a valid plateau', () => {
    // refactor by adding min and max variables (incase future rovers can go underneath or down the side of plateaus)?
    // let minSize = 0; 
    // let maxSize = 5; 

    test('Check co-ordinates are not 0', () => {
        expect(() => checkPlateau(0, 0)).toThrow("Error: x and y co-ordinates must be greater than 0");
        expect(() => checkPlateau(0, 5)).toThrow("Error: x and y co-ordinates must be greater than 0");
    });
    test('Check co-ordinates are not less than 0', () => {
        expect(() => checkPlateau(-1, -5)).toThrow("Error: x and y co-ordinates must be greater than 0");
        expect(() => checkPlateau(-1, -0)).toThrow("Error: x and y co-ordinates must be greater than 0");
    });
    test('Check co-ordinates are integers', () => {
        expect(() => checkPlateau(0.394, 3.91)).toThrow("Error: x and y co-ordinates must be integers");
    });
    test('Check co-ordinates are numbers', () => {
        expect(() => checkPlateau("donkey", "melon")).toThrow("Error: x and y co-ordinates must be numbers");
        expect(() => checkPlateau("0", "5")).toThrow("Error: x and y co-ordinates must be numbers");
    });
    const validPlateau = [5, 5];
    it('returns co-ordinates if valid plateau co-ordinates have been received', () => {
        expect(checkPlateau(5, 5)).toEqual(validPlateau);
    });
});

// The Initial Position
// An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North. 
// Assume that the square directly North from (x, y) is (x, y+1)
// The position is made up of two integers - check integers (not string or decimal)

describe('Check rovers initial position', () => {

    test('Has initial position', () => {
        expect(() => checkInitialPosition()).toThrow("Error: rover must have initial position");
    });

    test('Throws error if initial position is not valid', () => {
        expect(() => checkInitialPosition('1 2 X')).toThrow("Error: must have N, S, E or W direction");
        expect(() => checkInitialPosition('1 2 Peanuts')).toThrow("Error: must have N, S, E or W direction");
        expect(() => checkInitialPosition('1 2 ')).toThrow("Error: must have x co-ordinates, y co-ordinates and direction");
        expect(() => checkInitialPosition('N')).toThrow("Error: must have x co-ordinates, y co-ordinates and direction");
    });

    // test('Throws error if initial position is not on the plateau', () => {
    //     let plateauSize = '5 5'
    //     let roverInitialPos = '1 2 N'

    // });

    test('If initial position is valid, position is returned', () => {
        expect(checkInitialPosition('1 2 N')).toBe('1 2 N');
        expect(checkInitialPosition('1 5 E')).toBe('1 5 E');
        expect(checkInitialPosition('5 5 W')).toBe('5 5 W');
        expect(checkInitialPosition('0 0 S')).toBe('0 0 S');
    });
});

// The Direction/s && Instructions
// Each rover has two lines of input - check has 2 and not null
// The first line gives the rover's position - check it has a position / this is valid 
// second line is a series of instructions
// The possible letters are 'L', 'R' and 'M'. 
// 'M' means move forward one grid point - and maintain the same heading.

describe('Check instructions', () => {

    const validInstructions = 'LMLMLMLMM';

    it('returns instructions if valid rover instructions have been received', () => {
        expect(checkInstructions(validInstructions)).toEqual(validInstructions);
    });

    test('It throws an error if instructions are not correct letters', () => {

        const invalidInstructions = ['LMLMPQE2D', "kitten", 2, true, false, "", "AC-12"];

        invalidInstructions.forEach(instruction => {
            expect(() => checkInstructions(instruction)).toThrow("Error: instructions must be letters L, R or M");
        })
    });
});

// Change direction
// If L or R
// turn(N (initialPos[2]))
// switch (L or R)
// N -> returns (L) W or (R) E
// E -> returns N or S
// S -> returns E or W
// W -> returns S or N

describe('Rover changes direction', () => {

    const initialDirection = 'N'
    
    it('returns the cardinal direction to its original positions left if passed "L"', () => {
        expect(changeDirection(initialDirection, 'L')).toEqual('W');
    });

    it('returns the cardinal direction to its original positions right if passed "R"', () => {
        expect(changeDirection(initialDirection, 'R')).toEqual('E');
    });

    const initialPositions = [ 'N', 'E', 'S', 'W', 'N', 'E', 'S', 'W',]
    const newPositions = [ 'W', 'N', 'E', 'S', 'E', 'S', 'W', 'N']
    
    const lOrR = [ 'L', 'L', 'L', 'L', 'R', 'R', 'R', 'R']

    initialPositions.forEach((position, index) => {
        expect(changeDirection(position, lOrR[index])).toEqual(newPositions[index]);
    })

});

// Move forward

// gets current position '1 2 N'
// x = 1
// y = 2
// directon = N

// if direction == N -> y + 1
// if direction == E -> x + 1
// if       dir == S -> y - 1
// if       dir == W -> x - 1

// describe('Move Forwards', () => {
//     // check it calls other function or receives current pos?
//     // do this when stripping out into modules
// });

