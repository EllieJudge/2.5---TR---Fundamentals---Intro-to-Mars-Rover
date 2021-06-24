const checkMoveIsSafe = require('../../checks/check-move-is-safe/check-move-is-safe');

function moveForwards(rover) {

    if (rover.direction === "N") {
        checkMoveIsSafe(rover)
        rover.y += 1
        return rover
    }

    if (rover.direction === "S") {
        checkMoveIsSafe(rover)
        rover.y -= 1
        return rover
    }

    if (rover.direction === "E") {
        checkMoveIsSafe(rover)
        rover.x += 1
        return rover
    }

    if (rover.direction === "W") {
        checkMoveIsSafe(rover)
        rover.x -= 1
        return rover
    }

    return rover
}

module.exports = moveForwards;

