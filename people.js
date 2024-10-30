 



 
const myName = require('./name.js');
const myHobbies = require('./hobbies.js');




function myFunction() {
    const name = myName('Dario', 'Palmesi')
    const hobby = myHobbies('gamer', 'calcio', 'anime')
    const newUser = {...name, ...hobby}
    return newUser
}

const user = myFunction()

console.log(user);



