// class Person{
//     name = 'Suresh';

//     constructor(){
//         this.age = 22;
//     }

//     greet(){
//         console.log(`Hello Mr. ${this.name} and I am ${this.age} years old`);
//     }
// }

function Person(){
    this.name = 'Suresh';
    this.age = 22;
    this.greet = function(){
    console.log(`Hello Mr. ${this.name} and I am ${this.age} years old`);
    }
}

Person.prototype = {
    printAge(){
        console.log(`You are ${this.age} years old.`);
    }
}

const suresh = new Person();
// suresh.greet();
// console.log(suresh.toString());
// console.log(suresh.__proto__ === Person.prototype)
suresh.printAge();
console.log(suresh.__proto__); 