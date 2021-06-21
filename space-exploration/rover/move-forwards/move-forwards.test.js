const {
    moveForwards
} = require('../../modules');


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


    // test('Test what is going on', () => {
    //     expect(moveForwards(rover)).toEqual("poop");
    // });
    
});