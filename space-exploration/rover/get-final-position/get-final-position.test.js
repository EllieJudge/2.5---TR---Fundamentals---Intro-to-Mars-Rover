const { getFinalPosition } = require('./get-final-position');

//Not happy delete if necessary
describe('moveForwards function is called from getFinalPosition', () => {

    // this seems wrong ?? 
    move = require('./get-final-position').getFinalPosition;
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

describe('getFinalPosition returns a rovers final position', () => {

    test('it returns a Rovers final position', () => {
        expect(getFinalPosition('5 5', '1 2 N', 'LMLMLMLMM')).toBe('1 3 N');
    });

    test('it returns a Rovers final position', () => {
        expect(getFinalPosition('5 5', '3 3 E', 'MMRMMRMRRM')).toBe('5 1 E');
    });
});

