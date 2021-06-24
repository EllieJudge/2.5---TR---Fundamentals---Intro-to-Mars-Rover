const checkMoveIsSafe = require('./check-move-is-safe')


describe('Check move is safe', () => {

    const rover1 = {
        x: 4,
        y: 5, 
        direction: 'N', 
        plateau: [5, 5]
    }

    test('If move sends rover off plateau edge, throw error', () => {
        expect(() => checkMoveIsSafe(rover1)).toThrow("Error: rover is about to fall off the plateau");
    });
    

    const rover2 = {
        x: 5,
        y: 0, 
        direction: 'E', 
        plateau: [5, 5]
    }

    test('If move sends rover off plateau edge, throw error', () => {
        expect(() => checkMoveIsSafe(rover2)).toThrow("Error: rover is about to fall off the plateau");
    });

    const rover3 = {
        x: 4,
        y: 0, 
        direction: 'S', 
        plateau: [5, 5]
    }

    test('If move sends rover off plateau edge, throw error', () => {
        expect(() => checkMoveIsSafe(rover3)).toThrow("Error: rover is about to fall off the plateau");
    });
    
    const rover4 = {
        x: 0,
        y: 3, 
        direction: 'W', 
        plateau: [5, 5]
    }

    test('If move sends rover off plateau edge, throw error', () => {
        expect(() => checkMoveIsSafe(rover4)).toThrow("Error: rover is about to fall off the plateau");
    });


    const rover5 = {
        x: 2,
        y: 3, 
        direction: 'W', 
        plateau: [5, 5]
    }

    test('If move is safe, return "Safe"', () => {
        expect(checkMoveIsSafe(rover5)).toBe("Safe");
    });
});



describe('It checks move is safe for different sized plateaus', () => {

    const rover1 = {
        x: 5,
        y: 5, 
        direction: 'N', 
        plateau: [5, 7]
    }

    test('If move is within the parameters of the plateau it returns safe', () => {
        expect(checkMoveIsSafe(rover1)).toBe("Safe");
    });

    const rover2 = {
        x: 5,
        y: 7, 
        direction: 'N', 
        plateau: [5, 7]
    }

    test('If move sends rover off plateau edge, throw error', () => {
        expect(() => checkMoveIsSafe(rover2)).toThrow("Error: rover is about to fall off the plateau");
    });

    // const rover2 = {
    //     x: 2,
    //     y: 5, 
    //     direction: 'W', 
    //     plateau: [2, 4]
    // }

    // test('If move sends rover off plateau edge, throw error', () => {
    //     expect(() => checkMoveIsSafe(rover2)).toThrow("Error: rover is about to fall off the plateau");
    // });
    
});