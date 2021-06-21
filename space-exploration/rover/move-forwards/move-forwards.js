
function moveForwards(rover) {

    if (rover.direction === "W")
        rover.x -= 1

    if (rover.direction === "E")
        rover.x += 1

    if (rover.direction === "S")
        rover.y -= 1

    if (rover.direction === "N")
        rover.y += 1

    return rover
}

module.exports = moveForwards;

