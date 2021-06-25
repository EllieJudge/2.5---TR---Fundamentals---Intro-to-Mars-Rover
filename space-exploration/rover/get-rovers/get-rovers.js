
const modules = require('../../modules');

const rovers = []

function getRovers() {

    return rovers
}

function addRover(rover) {

    rovers.push(rover)
    rovers.forEach(rover => rover.name = modules.getName())

    return rovers
}

module.exports = { getRovers, addRover };