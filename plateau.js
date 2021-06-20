function checkPlateau(plateau) {

    let platArray = plateau.split(' ')

    let x = Number.parseInt(platArray[0])
    let y = Number.parseInt(platArray[1])


    if (isNaN(x) || isNaN(y)) {
        throw new Error("Error: x and y co-ordinates must be numbers");
    }

    if (x <= 0 || y <= 0) {
        throw new Error("Error: x and y co-ordinates must be greater than 0");
    }

    return [x, y]
}


function checkMoveIsSafe(rover) {

    let plateauX = rover.plateau[0]
    let plateauY = rover.plateau[1]

    if(rover.x - 1 < 0 || rover.y - 1 < 0) {
        throw new Error("Error: rover is about to fall off edge of plateau")
    }

}

module.exports = {
    checkPlateau,
    checkMoveIsSafe
};