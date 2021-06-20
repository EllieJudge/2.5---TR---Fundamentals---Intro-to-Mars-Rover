function checkPlateau(plateau) {

    const platArray = plateau.split(' ')

    const x = Number.parseInt(platArray[0])
    const y = Number.parseInt(platArray[1])


    if (isNaN(x) || isNaN(y)) {
        throw new Error("Error: x and y co-ordinates must be numbers");
    }

    if (x <= 0 || y <= 0) {
        throw new Error("Error: x and y co-ordinates must be greater than 0");
    }

    return [x, y]
}


function checkMoveIsSafe(rover) {

    const plateauX = rover.plateau[0]
    const plateauY = rover.plateau[1]

    if(rover.x - 1 < 0 || rover.y - 1 < 0) {
        throw new Error("Error: rover is about to fall off lower left edge of plateau")
    }
    if(rover.x + 1 > plateauX || rover.y + 1 > plateauY) {
        throw new Error("Error: rover is about to fall off upper right edge of plateau")
    }
    
    return "Safe"
}

module.exports = {
    checkPlateau,
    checkMoveIsSafe
};