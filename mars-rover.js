function returnsSomething () {
    return true
}

function checkPlateau(x, y) {

    if(typeof y == "string" || typeof x == "string") {
        throw new Error("Error: x and y co-ordinates must be numbers");
    }
    if (!Number.isInteger(x) || !Number.isInteger(y)){
        throw new Error("Error: x and y co-ordinates must be integers");
    }
    if (x === 0 || y === 0) {
        throw new Error("Error: x and y co-ordinates must be greater than 0");
    }
    if (x < 0 || y < 0) {
        throw new Error("Error: x and y co-ordinates must be greater than 0");
    }
    

}


function checkInitialPosition (x, y, direction) {

    // if this is passed in as x, y, direction then fine
    // if not will need logic to split out initialPos

    // 1 2 N

    // check this against plateau coordinates

    console.log("nothing passed in =", x, y, direction)

    console.log(!(x || y || direction))

    
    if (x === undefined && y === undefined && direction === undefined) {
        throw new Error("Error: rover must have initial position")
    }




}










module.exports = {
    returnsSomething,
    checkPlateau,
    checkInitialPosition
};