
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

        // create function moveForwards
        // function (rover)
        // if move === "M" ... etc
        // returns rover.x
        if (move === "M") {
            if (rover.direction === "W")
                modules.checkMoveIsSafe(rover)
                // modules.moveForwards(rover)
            rover.x -= 1

            if (rover.direction === "E")
                modules.checkMoveIsSafe(rover)
            rover.x += 1

            if (rover.direction === "S")
                modules.checkMoveIsSafe(rover)
            rover.y -= 1

            if (rover.direction === "N")
                modules.checkMoveIsSafe(rover)
            rover.y += 1

            
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