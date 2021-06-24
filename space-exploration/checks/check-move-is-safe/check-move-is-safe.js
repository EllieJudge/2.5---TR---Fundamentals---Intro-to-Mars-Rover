function checkMoveIsSafe(rover) {

    // Plateau upper right co-ordinates          _
    const plateauURX = rover.plateau[0] // 5    | |
    const plateauURY = rover.plateau[1] // 5     -

    // Plateau lower left co-ordinates
    // 0, 0 

    // What is it's round?!!?

    if (rover.direction === 'N' && rover.y + 1 > plateauURY) {
        // Would like to add a template literal with info about which side it's going to fall off etc here
        // but can't make a template literal work in the throw
        throw new Error("Error: rover is about to fall off the plateau")
    }

    if (rover.direction === 'S' && rover.y - 1 < 0) {
        throw new Error("Error: rover is about to fall off the plateau")
    }

    if (rover.direction === 'E' && rover.x + 1 > plateauURX) {
        throw new Error("Error: rover is about to fall off the plateau")
    }

    if (rover.direction === 'W' && rover.x - 1 < 0) {
        throw new Error("Error: rover is about to fall off the plateau")
    }

    return "Safe"
}



module.exports = checkMoveIsSafe;