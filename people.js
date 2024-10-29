const name = require('./name.js')

console.log(name);

const hobby = require('./hobbies.js');
const myName = require('./name.js');
const myHobbies = require('./hobbies.js');


console.log(hobby);

function myFunction() {
    return {
        myName,
        myHobbies
    }
}

console.log(myFunction());
