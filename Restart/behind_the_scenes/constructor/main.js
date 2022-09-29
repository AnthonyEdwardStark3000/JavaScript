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

const suresh = new Person();
suresh.greet();
