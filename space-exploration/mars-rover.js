
const {
    checkPlateau,
    checkMoveIsSafe
} = require("./plateau");

let modules = require('./modules.js');


let rovers = []

function returnsSomething() {
    return true
}


function checkInstructions(instructions) {

    if (typeof instructions !== "string" || instructions === "") {
        throw new Error("Error: instructions must be letters L, R or M")
    }

    const validLetters = ['L', 'R', 'M'];
    const invalidLetters = instructions.split('').filter(letter => !validLetters.includes(letter));

    if (invalidLetters.length > 0) {
        throw new Error("Error: instructions must be letters L, R or M")
    }

    return instructions.split('') // ['L', 'M', 'L','M', 'L', 'M','L', 'M', 'M']
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

function checkForCollisions(rover, rovers) {

    rovers.forEach(existingRover => {
        if (existingRover.x === rover.x && existingRover.y === rover.y) {
            throw new Error("Error: collision with another rover ahead! Abort! Abort!")
        }
    })

    return "All clear"
}

function getFinalPosition(plateau, initialPos, instructions) {

    const plat = checkPlateau(plateau)
    // const initPos = checkInitialPosition(initialPos, plat)

    const initPos = modules.checkInitialPosition(initialPos, plat);


    const directionsArr = checkInstructions(instructions)

    let rover = {
        // give rover uuid / name
        x: initPos[0],
        y: initPos[1],
        direction: initPos[2],
        plateau: plat
    }

    checkForCollisions(rover, rovers)

    directionsArr.forEach(move => {

        if (move === "L" || move === "R") {
            const newDirection = changeDirection(rover.direction, move)
            rover.direction = newDirection
        }

        if (move === "M") {
            if (rover.direction === "W")
                checkMoveIsSafe(rover)
            rover.x -= 1

            if (rover.direction === "E")
                checkMoveIsSafe(rover)
            rover.x += 1

            if (rover.direction === "S")
                checkMoveIsSafe(rover)
            rover.y -= 1

            if (rover.direction === "N")
                checkMoveIsSafe(rover)
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
    checkInstructions,
    checkForCollisions,
    changeDirection,
    getFinalPosition
};