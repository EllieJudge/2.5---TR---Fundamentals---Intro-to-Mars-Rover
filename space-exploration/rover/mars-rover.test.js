

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

