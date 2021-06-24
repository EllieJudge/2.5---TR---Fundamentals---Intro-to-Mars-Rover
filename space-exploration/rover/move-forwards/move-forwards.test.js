const moveForwards = require('./move-forwards');


describe('Move forwards', () => {

    let rover = {
        x: 1,
        y: 2,
        direction: 'W',
        plateau: [5, 5]
    }

    test('If rovers current direction is "W", it returns rover with X co-ordinate - 1', () => {
        expect(moveForwards(rover)).toEqual({
            x: 0,
            y: 2,
            direction: 'W',
            plateau: [5, 5]
        });
    });


    let rover2 = {
        x: 1,
        y: 2,
        direction: 'E',
        plateau: [5, 5]
    }

    test('If rovers current direction is "E", it returns rover with X co-ordinate + 1', () => {
        expect(moveForwards(rover2)).toEqual({
            x: 2,
            y: 2,
            direction: 'E',
            plateau: [5, 5]
        });
    });

    let rover3 = {
        x: 1,
        y: 2,
        direction: 'S',
        plateau: [5, 5]
    }

    test('If rovers current direction is "S", it returns rover with Y co-ordinate - 1', () => {
        expect(moveForwards(rover3)).toEqual({
            x: 1,
            y: 1,
            direction: 'S',
            plateau: [5, 5]
        });
    });

    let rover4 = {
        x: 1,
        y: 2,
        direction: 'N',
        plateau: [5, 5]
    }

    test('If rovers current direction is "N", it returns rover with Y co-ordinate + 1', () => {
        expect(moveForwards(rover4)).toEqual({
            x: 1,
            y: 3,
            direction: 'N',
            plateau: [5, 5]
        });
    });
    
});