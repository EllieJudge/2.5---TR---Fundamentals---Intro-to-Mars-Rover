
function checkPlateau(x, y) {

    let plateau = []

    if (typeof y == "string" || typeof x == "string") {
        throw new Error("Error: x and y co-ordinates must be numbers");
    }
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
        throw new Error("Error: x and y co-ordinates must be integers");
    }
    if (x === 0 || y === 0) {
        throw new Error("Error: x and y co-ordinates must be greater than 0");
    }
    if (x < 0 || y < 0) {
        throw new Error("Error: x and y co-ordinates must be greater than 0");
    }

    plateau.push(x, y)

    // console.log("plateau size: ", plateau) // [5, 5]
    return plateau

}


module.exports = {
    checkPlateau
};