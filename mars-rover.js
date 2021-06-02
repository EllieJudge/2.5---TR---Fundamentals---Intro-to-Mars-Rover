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

    console.log("plateau size: ", plateau)
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

    console.log("initial position: ", initialPos)
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

    console.log("rover instructions: ", instructions)
    return instructions
}


// Change direction
// If L or R
// turn(N (initialPos[2]))
// switch (L or R)
// N -> returns (L) W or (R) E
// E -> returns N or S
// S -> returns E or W
// W -> returns S or N

function changeDirection(initialPos, turnL) {

    let currentDirection = initialPos.split(' ')
    let newDirection

    if (turnL) {
        switch (currentDirection[2]) {
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


    console.log("currentDirection", currentDirection.pop())

    console.log("currentDirection", currentDirection)

    console.log("currentDirection", currentDirection.push(newDirection))

    console.log("currentDirection", currentDirection)

    console.log("newtDirection", newDirection)

    currentDirection.pop()
    currentDirection.push(newDirection)
    return currentDirection.join(' ')

}



module.exports = {
    returnsSomething,
    checkPlateau,
    checkInitialPosition,
    checkInstructions,
    changeDirection

};