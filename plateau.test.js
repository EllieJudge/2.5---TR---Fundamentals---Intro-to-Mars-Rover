const {
    checkPlateau
} = require("./plateau");

// The Plateau
// The first line of input is the upper-right coordinates of the plateau 
// - Check min, 0,0 

describe('Check is a valid plateau', () => {
    // refactor by adding min and max variables (incase future rovers can go underneath or down the side of plateaus)?
    // let minSize = 0; 
    // let maxSize = 5; 

    // test('Check co-ordinates are not 0', () => {
    //     expect(() => checkPlateau(0, 0)).toThrow("Error: x and y co-ordinates must be greater than 0");
    //     expect(() => checkPlateau(0, 5)).toThrow("Error: x and y co-ordinates must be greater than 0");
    // });
    // test('Check co-ordinates are not less than 0', () => {
    //     expect(() => checkPlateau(-1, -5)).toThrow("Error: x and y co-ordinates must be greater than 0");
    //     expect(() => checkPlateau(-1, -0)).toThrow("Error: x and y co-ordinates must be greater than 0");
    // });
    // test('Check co-ordinates are integers', () => {
    //     expect(() => checkPlateau(0.394, 3.91)).toThrow("Error: x and y co-ordinates must be integers");
    // });
    // test('Check co-ordinates are numbers', () => {
    //     expect(() => checkPlateau("donkey", "melon")).toThrow("Error: x and y co-ordinates must be numbers");
    //     expect(() => checkPlateau("0", "5")).toThrow("Error: x and y co-ordinates must be numbers");
    // });
    const validPlateau = '5 5';
    it('returns co-ordinates if valid plateau co-ordinates have been received', () => {
        expect(checkPlateau(validPlateau)).toEqual([5, 5]);
    });
});