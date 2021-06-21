function checkForCollisions(rover, rovers) {

    rovers.forEach(existingRover => {
        if (existingRover.x === rover.x && existingRover.y === rover.y) {
            throw new Error("Error: collision with another rover ahead! Abort! Abort!")
        }
    })

    return "All clear"
}

module.exports = checkForCollisions;