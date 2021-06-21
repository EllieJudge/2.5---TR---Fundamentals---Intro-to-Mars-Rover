const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');

function getName() {
    return uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }); 
}

module.exports = getName;