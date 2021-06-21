const {
    checkForCollisions
} = require('../../modules')


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
