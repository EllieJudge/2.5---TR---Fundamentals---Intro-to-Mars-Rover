
function moveForwards(rover) {
    
    console.log("Hiya", rover)

            if (rover.direction === "W")
            rover.x -= 1

            return rover

            // if (rover.direction === "E")
            // rover.x += 1

            // if (rover.direction === "S")
            // rover.y -= 1

            // if (rover.direction === "N")
            // rover.y += 1
    
}

module.exports = moveForwards;

