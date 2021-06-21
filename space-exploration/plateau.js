function createPlateau(plateau) {

    const platArray = plateau.split(' ')

    const x = Number.parseInt(platArray[0])
    const y = Number.parseInt(platArray[1])


    if (isNaN(x) || isNaN(y)) {
        throw new Error("Error: x and y co-ordinates must be numbers");
    }

    if (x <= 0 || y <= 0) {
        throw new Error("Error: x and y co-ordinates must be greater than 0");
    }

    return [x, y]
}


module.exports = {
    createPlateau
};