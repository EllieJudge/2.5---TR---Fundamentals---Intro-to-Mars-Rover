
const {
    createPlateau
} = require("./plateau");

const modules = require('./modules.js');

let rovers = []

function returnsSomething() {
    return true
}

function changeDirection(currentDirection, turn) {

    let newDirection

    if (turn === "L") {
        switch (currentDirection) {
            case "N":
                newDirection = "W"
                break;
            case "E":
                newDirection = "N"
                break;
            case "S":
                newDirection = "E"
                break;
            case "W":
                newDirection = "S"
                break;
            default:
        }
    }
    else if (turn === "R") {
        switch (currentDirection) {
            case "N":
                newDirection = "E"
                break;
            case "E":
                newDirection = "S"
                break;
            case "S":
                newDirection = "W"
                break;
            case "W":
                newDirection = "N"
                break;
            default:
        }
    }

    return newDirection
}

function getFinalPosition(plateau, initialPos, instructions) {

    const plat = createPlateau(plateau)
    const initPos = modules.checkInitialPosition(initialPos, plat);
    const directionsArr = modules.checkInstructions(instructions)

    let rover = {
        // give rover uuid / name
        x: initPos[0],
        y: initPos[1],
        direction: initPos[2],
        plateau: plat
    }

    modules.checkForCollisions(rover, rovers)

    directionsArr.forEach(move => {

        if (move === "L" || move === "R") {
            const newDirection = changeDirection(rover.direction, move)
            rover.direction = newDirection
        }

        if (move === "M") {
            if (rover.direction === "W")
                modules.checkMoveIsSafe(rover)
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
    return rover;
}

getFinalPosition('5 5', '1 2 N', 'LMLMLMLMM')
getFinalPosition('5 5', '3 3 E', 'MMRMMRMRRM')




module.exports = {
    returnsSomething,
    // checkInitialPosition,
    // checkInstructions,
    // checkForCollisions,
    changeDirection,
    getFinalPosition
};