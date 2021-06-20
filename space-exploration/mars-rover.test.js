const {
    returnsSomething,
    checkInitialPosition,
    checkInstructions,
    changeDirection,
    getFinalPosition
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

    test('Throws error if initial position is not on the plateau', () => {
        
        let initialPos = '9 6 N'
        let plateau = [5, 5]

        expect(() => checkInitialPosition(initialPos, plateau)).toThrow("Error: you've missed the plateau!");

    });

    // Add check for capital letters

    test('If initial position is valid, position is returned as an array', () => {
        expect(checkInitialPosition('1 2 N')).toEqual([1, 2, 'N']);
        expect(checkInitialPosition('1 5 E')).toEqual([1, 5, 'E']);
        expect(checkInitialPosition('5 5 W')).toEqual([5, 5, 'W']);
        expect(checkInitialPosition('0 1 S')).toEqual([0, 1, 'S']);
    });
});

describe('Check instructions', () => {

    const validInstructions = 'LMLMLMLMM';
    const valInstructionsArr = [
        'L', 'M', 'L',
        'M', 'L', 'M',
        'L', 'M', 'M'
    ]

    it('returns instructions if valid rover instructions have been received', () => {
        expect(checkInstructions(validInstructions)).toEqual(valInstructionsArr);
    });

    test('It throws an error if instructions are not correct letters', () => {

        const invalidInstructions = ['LMLMPQE2D', "kitten", 2, true, false, "", "AC-12"];

        invalidInstructions.forEach(instruction => {
            expect(() => checkInstructions(instruction)).toThrow("Error: instructions must be letters L, R or M");
        })
    });
});

describe('Rover changes direction', () => {

    const initialDirection = 'N'

    it('returns the cardinal direction to its original positions left if passed "L"', () => {
        expect(changeDirection(initialDirection, 'L')).toEqual('W');
    });

    it('returns the cardinal direction to its original positions right if passed "R"', () => {
        expect(changeDirection(initialDirection, 'R')).toEqual('E');
    });

    const initialPositions = ['N', 'E', 'S', 'W', 'N', 'E', 'S', 'W',]
    const newPositions = ['W', 'N', 'E', 'S', 'E', 'S', 'W', 'N']

    const lOrR = ['L', 'L', 'L', 'L', 'R', 'R', 'R', 'R']

    initialPositions.forEach((position, index) => {
        expect(changeDirection(position, lOrR[index])).toEqual(newPositions[index]);
    })

});

describe('Move Forwards function', () => {

    // this seems wrong ?? 
    move = require('./mars-rover').getFinalPosition;
    move = jest.fn();

    it('should be called with plateau co-ordinates, rovers initial position and instructions, as arguments', () => {

        const plateau = [5, 5]
        const initialPos = [1, 2,'N']
        const instructions = 'LMLMLMLMM'
        
        move(plateau, initialPos, instructions)
        expect(move).toHaveBeenCalledTimes(1); // true
        expect(move).toHaveBeenCalledWith(plateau, initialPos, instructions);

    });

});

