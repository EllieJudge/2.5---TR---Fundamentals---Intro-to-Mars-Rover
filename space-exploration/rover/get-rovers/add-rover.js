const getName = require('../get-name/get-name')
const rovers = require('./rovers')

function addRover(rover) {

    rovers.push(rover)
    rovers.forEach(rover => rover.name = getName())

    return rovers
}


module.exports = addRover;