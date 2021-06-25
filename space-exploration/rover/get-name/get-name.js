const { uniqueNamesGenerator, adjectives, colors, starWars } = require('unique-names-generator');

function getName() {
    const uniqueName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, starWars] }); 
    const nameSplit = uniqueName.split(' ')
    
    return nameSplit.join('_')
}

module.exports = getName;