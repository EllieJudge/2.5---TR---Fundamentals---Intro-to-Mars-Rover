function checkMoveIsSafe(rover) {

    // Plateau upper right co-ordinates          _
    const plateauURX = rover.plateau[0] // 5    | |
    const plateauURY = rover.plateau[1] // 5     -

    // Plateau lower left co-ordinates
    // 0, 0 

    // What is it's round?!!?


    if (rover.direction === 'N' && rover.y + 1 > plateauURY) {
        throw new Error("Error: rover is about to fall off the plateau")
    }

    if (rover.direction === 'S' && rover.y - 1 < 0) {
        throw new Error("Error: rover is about to fall off the plateau")
    }

    if (rover.direction === 'E' && rover.x + 1 > plateauURX) {

        //console.log("rover.names current position is ${rover.x} facing East. Change direction!")
        // console.log("Template literal: ", `${rover.x}`)
        throw new Error(`Error: rover is about to fall off the plateau`)
    }

    if (rover.direction === 'W' && rover.x - 1 < 0) {
        throw new Error("Error: rover is about to fall off the plateau")
    }

    return "Safe"
}



module.exports = checkMoveIsSafe;