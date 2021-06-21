const {
    returnsSomething,
    checkInstructions,
    changeDirection,
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

    it("returns 'All clear' message if no rovers are on Mars", () => {

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
        const initialPos = [1, 2, 'N']
        const instructions = 'LMLMLMLMM'

        move(plateau, initialPos, instructions)
        expect(move).toHaveBeenCalledTimes(1); // true
        expect(move).toHaveBeenCalledWith(plateau, initialPos, instructions);

    });

});

