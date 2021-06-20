
const {
    checkPlateau,
    checkMoveIsSafe
} = require("./plateau");

function returnsSomething() {
    return true
}

function checkInitialPosition(initialPos, plateau) {

    if (initialPos === undefined) {
        throw new Error("Error: rover must have initial position")
    }

    const noEmptyStrings = initialPos.split(' ').filter(el => el !== "")
    const initialPosToArr = noEmptyStrings.map(el => isNaN(Number(el)) ? el : Number(el))

    if (initialPosToArr.length < 3) {
        throw new Error("Error: must have x co-ordinates, y co-ordinates and direction");
    }

     if(initialPosToArr[0] < 0 || initialPosToArr[0] > plateau[0] || initialPosToArr[1] < 0 || initialPosToArr[1] > plateau[1]) {
        throw new Error("Error: you've missed the plateau!")
    }

    const validDirection = ["N", "E", "S", "W"]
    const direction = initialPosToArr[2]
    const match = validDirection.filter(letter => letter === direction)


    if (match.length === 0) {
        throw new Error("Error: must have N, S, E or W direction");
    }

   

   

    return initialPosToArr

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

function getFinalPosition(plateau, initialPos, instructions) {

    const plat = checkPlateau(plateau)
    const initPos = checkInitialPosition(initialPos, plat)
    const directionsArr = checkInstructions(instructions)

    let rover = {
        x: initPos[0], 
        y: initPos[1], 
        direction: initPos[2], 
        plateau: plat 
    }

    console.log("Rover: ", rover)

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
        }
    )
    
    return rover;
}

getFinalPosition('5 5', '3 3 E', 'MMRMMRMRRM')



module.exports = {
    returnsSomething,
    checkInitialPosition,
    checkInstructions,
    changeDirection,
    getFinalPosition
};