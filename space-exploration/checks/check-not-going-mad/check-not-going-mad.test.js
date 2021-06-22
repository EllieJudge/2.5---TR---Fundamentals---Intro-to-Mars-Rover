
const { notGoingMad } = require('../../modules')


describe('Check not mad', () => {

    it('returns are you sane?', () => {
        expect(notGoingMad()).toEqual("Are you sane?");
    });
});