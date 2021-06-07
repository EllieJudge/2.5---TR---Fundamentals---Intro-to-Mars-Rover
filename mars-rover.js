function returnsSomething() {

    return true

}

function checkPlateau(x, y) {

    let plateau = []

    if (typeof y == "string" || typeof x == "string") {
        throw new Error("Error: x and y co-ordinates must be numbers");
    }
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
        throw new Error("Error: x and y co-ordinates must be integers");
    }
    if (x === 0 || y === 0) {
        throw new Error("Error: x and y co-ordinates must be greater than 0");
    }
    if (x < 0 || y < 0) {
        throw new Error("Error: x and y co-ordinates must be greater than 0");
    }

    plateau.push(x, y)

    // console.log("plateau size: ", plateau) // [5, 5]
    return plateau

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

    // console.log("rover instructions: ", instructions.split('')) // LMLMLMLMM
    return instructions.split('')
}

function changeDirection(currentDirection, turn) {

    // console.log("Current Direction:", currentDirection)
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


    // Test: it recieves 3 arguments '5, 5', '1 2 N', 'LMLMLMLMM'
    
    // call checkPlateau -> [5, 5]
    // call checkInitialPos -> '1 2 N'
    // set rover object?

// let initPos = '1 2 N'

// split

// let initPosArray = [1, 2, "N"]

// let rover = {
//     direction: "N", // initPosArr [2] W S E N
//     x: 1, // initPosArr [0] 0 
//     y: 2 // initPosArr [1]
// }

// let directions = 'LMLMLMLMM'

// let directionsArr = ['L|','M|','L|','M|','L|','|M','L|','M|','M']

// Goal: 1 3 N

// directionsArr.forEach(move => {

    // if (move === "L" || move == "R") {
        // call getNewDirectionFunction (rover.Direction, move)
            // let newDir = will return -> currentDirection with new direction i.e '1 2 W' S
            // rover.direction === newDir.split(' ')[2]
    // }
    // if (move === "M") {
        // if (rover.direction === "W") {
            //rover.x - 1
        // IF (rover.direction === "E")
            // rover.x + 1
        // else if (rover.direction === "S")
            // rover.y - 1
        // else if (rover.direction === "N") {
            // rover.y + 1
        // }
        // }
    // }

// )

}

// moveForwards()



module.exports = {
    returnsSomething,
    checkPlateau,
    checkInitialPosition,
    checkInstructions,
    changeDirection,
    moveForwards

};