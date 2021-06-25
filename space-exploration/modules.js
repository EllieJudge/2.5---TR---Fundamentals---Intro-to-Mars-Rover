module.exports = {
    returnsSomething : require('./checks/checks-project-set-up/check-project-set-up'),
    createPlateau : require('./plateau/plateau'),
    checkInitialPosition : require('./checks/check-initial-position/check-initial-position'),
    checkInstructions : require('./checks/check-instructions/check-instructions'),
    checkMoveIsSafe : require('./checks/check-move-is-safe/check-move-is-safe'),
    checkForCollisions : require('./checks/check-for-collisions/check-for-collisions'),
    changeDirection : require('./rover/change-direction/change-direction'),
    moveForwards : require('./rover/move-forwards/move-forwards'),
    getName : require('./rover/get-name/get-name'),
    getRovers : require('./rover/get-rovers/get-rovers'),
    addRover : require('./rover/get-rovers/add-rover')
}