function checkMoveIsSafe(rover) {

    const plateauX = rover.plateau[0]
    const plateauY = rover.plateau[1]

    if (rover.direction === 'N' && rover.y + 1 > plateauY) {
        throw new Error("Error: rover is about to fall off the plateau")
    }

    if (rover.direction === 'S' && rover.y - 1 < 0) {
        throw new Error("Error: rover is about to fall off the plateau")
    }

    if (rover.direction === 'E' && rover.x + 1 > plateauX) {
        throw new Error("Error: rover is about to fall off the plateau")
    }

    if (rover.direction === 'W' && rover.x - 1 < 0) {
        throw new Error("Error: rover is about to fall off the plateau")
    }


    return "Safe"
}



module.exports = checkMoveIsSafe;