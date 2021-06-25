
const modules = require('../../modules');

const   { getRovers, addRover }  = require('../get-rovers/get-rovers')

// const rovers = []

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

    // modules.checkForCollisions(rover, rovers)

    modules.checkForCollisions(rover, getRovers())

    // call get-rovers which calls checkForCollisions

    directionsArr.forEach(move => {

        if (move === "L" || move === "R") {
            const newDirection = modules.changeDirection(rover.direction, move)
            rover.direction = newDirection
        }

        if (move === "M") {
            rover = modules.moveForwards(rover)
        }
    })

    // rovers.push(rover)
    // rovers.forEach(rover => rover.name = modules.getName())

    addRover(rover)
    
    return `${rover.x} ${rover.y} ${rover.direction}`
}

getFinalPosition('5 5', '1 2 N', 'LMLMLMLMM')
getFinalPosition('5 5', '3 3 E', 'MMRMMRMRRM')

console.log('Rovers: ', getRovers())





module.exports = {
    getFinalPosition
};