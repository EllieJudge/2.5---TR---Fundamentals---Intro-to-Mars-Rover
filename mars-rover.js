
const {
    checkPlateau,
    checkMoveIsSafe
} = require("./plateau");

function returnsSomething() {
    return true
}

function checkInitialPosition(initialPos) {

    if (initialPos === undefined) {
        throw new Error("Error: rover must have initial position")
    }

    const noEmptyStrings = initialPos.split(' ').filter(el => el !== "")
    const initialPosToArr = noEmptyStrings.map(el => isNaN(Number(el)) ? el : Number(el))

    if (initialPosToArr.length < 3) {
        throw new Error("Error: must have x co-ordinates, y co-ordinates and direction");
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

    // console.log("New Direction", newDirection)
    return newDirection
}

function moveForwards(plateau, initialPos, instructions) {

    // hard coding these for now but will eventually pass in above args
    let plat = checkPlateau('5 5')
    let initPos = checkInitialPosition('3 3 E')
    let directionsArr = checkInstructions('MMRMMRMRRM')

    let rover = {
        x: initPos[0], 
        y: initPos[1], 
        direction: initPos[2], 
        plateau: plat // [5, 5]
    }

    directionsArr.forEach(move => {

        if (move === "L" || move === "R") {
            let newDirection = changeDirection(rover.direction, move)
            rover.direction = newDirection
        }

        if (move === "M") {
            if (rover.direction === "W") 
                // check move won't kill rover
                // checkMoveIsSafe(rover, plateau) // rover.x - 1 < 0 throw error 
                rover.x -= 1
            
            if (rover.direction === "E") 
                // check move won't kill rover
                rover.x += 1

            if (rover.direction === "S")
                // check move won't kill rover
                rover.y -= 1
        
            if (rover.direction === "N") 
                // check move won't kill rover
                rover.y += 1
            }
            
        }
    )
    
    return rover;
}

moveForwards()



module.exports = {
    returnsSomething,
    checkInitialPosition,
    checkInstructions,
    changeDirection,
    moveForwards
};