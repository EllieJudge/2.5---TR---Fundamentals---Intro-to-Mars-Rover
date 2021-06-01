function returnsSomething () {
    return true
}

function checkPlateau(x, y) {
    if(x === 0 || y === 0) {
        throw new Error("Error: x and y co-ordinates must be greater than 0");
    }

}













module.exports = {
    returnsSomething,
    checkPlateau
};