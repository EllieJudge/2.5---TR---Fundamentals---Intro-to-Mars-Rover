// const { checkMoveIsSafe } = require('../../modules');

// const { checkInstructions } = require('../../modules')

// const checkMoveIsSafe = require('../../checks/check-move-is-safe/check-move-is-safe');
const modules = require('../../modules');

function moveForwards(rover) {

    if (rover.direction === "W")
    rover.x -= 1
    
    
    modules.checkMoveIsSafe(rover)
    // checkMoveIsSafe(rover)

    // notGoingMad()

    if (rover.direction === "E")
        // modules.checkMoveIsSafe(rover)
        rover.x += 1

    if (rover.direction === "S")
        // modules.checkMoveIsSafe(rover)
        rover.y -= 1

    if (rover.direction === "N")
        // modules.checkMoveIsSafe(rover)
        rover.y += 1

        console.log("rover2", rover)
    return rover
}

module.exports = moveForwards;

