module.exports = {
    checkInitialPosition : require('./checks/check-initial-position/check-initial-position'),
    checkInstructions : require('./checks/check-instructions/check-instructions'),
    checkMoveIsSafe : require('./checks/check-move-is-safe/check-move-is-safe'),
    checkForCollisions : require('./checks/check-for-collisions/check-for-collisions'),
    createPlateau : require('./plateau'),
    returnsSomething : require('./checks/checks-project-set-up/check-project-set-up')
}