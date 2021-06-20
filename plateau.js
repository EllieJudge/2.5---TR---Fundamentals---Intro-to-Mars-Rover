
function checkPlateau(plateau) {

    let platArray = plateau.split(' ')


    let x = Number.parseInt(platArray[0])
    let y = Number.parseInt(platArray[1])


    if (x === NaN || y === NaN) {
        throw new Error("Error: x and y co-ordinates must be numbers");
    }
    if (x === 0 || y === 0) {
        throw new Error("Error: x and y co-ordinates must be greater than 0");
    }
    if (x < 0 || y < 0) {
        throw new Error("Error: x and y co-ordinates must be greater than 0");
    }


    return [x, y]
}


module.exports = {
    checkPlateau
};