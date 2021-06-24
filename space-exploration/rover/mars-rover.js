
const modules = require('../modules');

const rovers = []

function getFinalPosition(plateau, initialPos, instructions) {

    const plat = modules.createPlateau(plateau)
    const initPos = modules.checkInitialPosition(initialPos, plat);
    const directionsArr = modules.checkInstructions(instructions)

    let rover = {
        x: initPos[0],
        y: initPos[1],
        direction: initPos[2],
        plateau: plat
    }

    modules.checkForCollisions(rover, rovers)

    directionsArr.forEach(move => {

        if (move === "L" || move === "R") {
            const newDirection = modules.changeDirection(rover.direction, move)
            rover.direction = newDirection
        }

        if (move === "M") {
            rover = modules.moveForwards(rover)
        }
    })

    rovers.push(rover)
    rovers.forEach(rover => rover.name = modules.getName())
    return rover;
}

getFinalPosition('5 5', '1 2 N', 'LMLMLMLMM')
getFinalPosition('5 5', '3 3 E', 'MMRMMRMRRM')

// console.log('Rovers: ', rovers)




module.exports = {
    getFinalPosition
};