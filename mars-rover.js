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

    console.log("plateau size: ", plateau) // [5, 5]
    return plateau

}


function checkInitialPosition(initialPos) {
    // if this is passed in as x, y, direction then fine
    // if not will need logic to split out initialPos
    // 1 2 N
    // check this against plateau coordinates

    if (initialPos === undefined) {
        throw new Error("Error: rover must have initial position")
    }

    if (initialPos.length < 5) {
        throw new Error("Error: must have x co-ordinates, y co-ordinates and direction");
    }

    const validDirection = ["N", "E", "S", "W"]
    const direction = initialPos.charAt(initialPos.length - 1)
    const match = validDirection.filter(letter => letter === direction)

    if (match.length === 0) {
        throw new Error("Error: must have N, S, E or W direction");
    }

    console.log("initial position: ", initialPos) // 1 2 N
    return initialPos

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

    console.log("rover instructions: ", instructions) // LMLMLMLMM
    return instructions
}

function changeDirection(currentDirection, turn) {

    console.log("Current Direction !!!! ", currentDirection)

    // want to take in position (whatever that might be regardless of intial or not)

    // const currentDirection = initialPos.split(' ') //N
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
            // code block
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

    // currentDirection.pop()
    // currentDirection.push(newDirection)

    // console.log("New Direction", currentDirection.join(' ')) // 1 2 W

    // want it to output new direction as 'Letter' 
    // return currentDirection.join(' ')

    console.log("new direction", newDirection)

    return newDirection
}

// function moveForwards() {

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

// }

// moveForwards()



module.exports = {
    returnsSomething,
    checkPlateau,
    checkInitialPosition,
    checkInstructions,
    changeDirection,
    // moveForwards

};