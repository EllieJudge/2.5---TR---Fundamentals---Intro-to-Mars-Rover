const { changeDirection } = require('../../modules');


describe('Rover changes direction', () => {

    const initialDirection = 'N'
    const initialPositions = ['N', 'E', 'S', 'W', 'N', 'E', 'S', 'W',]
    const newPositions = ['W', 'N', 'E', 'S', 'E', 'S', 'W', 'N']
    const lOrR = ['L', 'L', 'L', 'L', 'R', 'R', 'R', 'R']

    it('returns the cardinal direction to its original positions left if passed "L"', () => {
        expect(changeDirection(initialDirection, 'L')).toEqual('W');
    });

    it('returns the cardinal direction to its original positions right if passed "R"', () => {
        expect(changeDirection(initialDirection, 'R')).toEqual('E');
    });

    initialPositions.forEach((position, index) => {
        expect(changeDirection(position, lOrR[index])).toEqual(newPositions[index]);
    })

});