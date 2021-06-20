const {
    returnsSomething,
    checkInitialPosition,
    checkInstructions,
    changeDirection,
    getFinalPosition,
    checkForCollisions

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

describe('Check for collisions', () => {
    // it('It throws error if rover is about to collide with another rover', () => {
    //     expect(checkForCollisions(rover, rovers)).toThrow("Error: path blocked by another rover!");
    // });

        it("does returns 'All clear' message if no rovers are on Mars", () => {

            let rover1 = {
                x: 1, 
                y: 2, 
                direction: 'N', 
                plateau: [5, 5]
            }

            let rovers1 = []

        expect(checkForCollisions(rover1, rovers1)).toEqual("All clear");
    });

    it("checks rover isn't going to collide with another rover", () => {

        let rover2 = {
            x: 1, 
            y: 2, 
            direction: 'N', 
            plateau: [5, 5]
        }

        let rovers2 = [
            {
                x: 1, 
                y: 2, 
                direction: 'W', 
                plateau: [5, 5]
            }
        ]

    expect(() => checkForCollisions(rover2, rovers2)).toThrow("Error: collision with another rover ahead! Abort! Abort!");

    let rover3 = {
        x: 1, 
        y: 2, 
        direction: 'N', 
        plateau: [5, 5]
    }

    let rovers3 = [
        {
            x: 1, 
            y: 1, 
            direction: 'S', 
            plateau: [5, 5]
        },
        {
            x: 3, 
            y: 3, 
            direction: 'W', 
            plateau: [5, 5]
        },
        {
            x: 5, 
            y: 2, 
            direction: 'W', 
            plateau: [5, 5]
        }
    ]

    expect(checkForCollisions(rover3, rovers3)).toEqual("All clear");


    let rover4 = {
        x: 4, 
        y: 5, 
        direction: 'N', 
        plateau: [5, 5]
    }

    let rovers4 = [
        {
            x: 1, 
            y: 1, 
            direction: 'S', 
            plateau: [5, 5]
        },
        {
            x: 3, 
            y: 3, 
            direction: 'W', 
            plateau: [5, 5]
        },
        {
            x: 4, 
            y: 5, 
            direction: 'W', 
            plateau: [5, 5]
        }
    ]

    expect(() => checkForCollisions(rover4, rovers4)).toThrow("Error: collision with another rover ahead! Abort! Abort!");


});
})


//Not happy delete if necessary
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

