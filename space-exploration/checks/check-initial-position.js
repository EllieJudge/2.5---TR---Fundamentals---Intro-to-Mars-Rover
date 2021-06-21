function checkInitialPosition(initialPos, plateau) {

    if (initialPos === undefined) {
        throw new Error("Error: rover must have initial position")
    }

    const noEmptyStrings = initialPos.split(' ').filter(el => el !== "")
    const initialPosToArr = noEmptyStrings.map(el => isNaN(Number(el)) ? el.toUpperCase() : Number(el))

    if (initialPosToArr.length < 3) {
        throw new Error("Error: must have x co-ordinates, y co-ordinates and direction");
    }

    if (initialPosToArr[0] < 0 || initialPosToArr[0] > plateau[0] || initialPosToArr[1] < 0 || initialPosToArr[1] > plateau[1]) {
        throw new Error("Error: you've missed the plateau!")
    }

    const validDirection = ["N", "E", "S", "W"]
    const direction = initialPosToArr[2]
    const match = validDirection.filter(letter => letter === direction)

    if (match.length === 0) {
        throw new Error("Error: must have N, S, E or W direction");
    }

    return initialPosToArr
}

module.exports = {
    checkInitialPosition
};