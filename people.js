const name = require('./name.js')

console.log(name('dario', 'palmesi'));

const hobby = require('./hobbies.js');


console.log(hobby('calcio', 'game', 'musica'));

function myFunction() {
    return {
        name,
        hobby
    }
}

console.log(myFunction());
