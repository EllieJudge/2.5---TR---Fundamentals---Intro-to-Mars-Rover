const {
    checkInstructions
} = require("../../modules")


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