function returnsSomething () {
    return true
}

function checkPlateau(x, y) {

    // console.log(x, y)

    let plateau = []

    // console.log(plateau)

    plateau.push(x, y)

    // console.log(plateau)

    return plateau

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

    console.log(plateau.push(x, y))
    
    return plateau

}


function checkInitialPosition (initialPos) {
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

    let validDirection = ["N", "E", "S", "W"]
    let direction = initialPos.charAt(initialPos.length-1)
    let match = validDirection.filter(letter => letter === direction)

    if (match.length === 0) {
        throw new Error("Error: must have N, S, E or W direction");
    }

    return initialPos

}










module.exports = {
    returnsSomething,
    checkPlateau,
    checkInitialPosition
};