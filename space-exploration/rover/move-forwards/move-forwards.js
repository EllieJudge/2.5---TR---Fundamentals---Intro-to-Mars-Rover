const checkMoveIsSafe = require('../../checks/check-move-is-safe/check-move-is-safe');

function moveForwards(rover) {
    
    checkMoveIsSafe(rover)

    if (rover.direction === "N") {
        rover.y += 1
        return rover
    }

    if (rover.direction === "S") {
        rover.y -= 1
        return rover
    }

    if (rover.direction === "E") {
        rover.x += 1
        return rover
    }

    if (rover.direction === "W") {
        rover.x -= 1
        return rover
    }

    return rover
}

module.exports = moveForwards;

