let name='stark'; //block scope variable
// let name ="Re declaration error"; error bcz of re-declaring of already declared variable

var message = 'hola';//global scope variable
var message = 'namaste'; //re-declaring can be done for global scope variable

function greet(){
    let name ="Jarvis"; //block variable and re-declaring is fine here so should prefer let instead of var.
    let age = 2;
    var scope = 'inside';
    console.log(`${name} says hello and he is ${age} years old and say's ${message}`);
}

// console.log(age); //Will Throw an error bcz of block level scope
// console.log(`Trying to access var outside the function block yielded ${scope} app.js:14 Uncaught ReferenceError: scope is not defined, but check below and next console`);

// if(this.name === 'stark'){
//     var hobbies = ['programming','videography','aerial-photography','skating','photography','video-editing']; //created as an global variable
//     console.log(`Herecomes the disadvantage of var ${hobbies} in the next console`);
// }

function checkVar(){
    // console.log("Check");
    var message ='Hello';
}

//Accessing the same var which yielded uncaught reference error after an simple if statement
//note it's not an function just an simple if statement.
// checkVar();
// console.log(`${message} ${this.name} has several talents such as ${hobbies}`);
// greet();


//Prefer let over var bcz var messup when they are inside {} , and var can be re-declared.

//                               Hoisting
// Var vs Let , const
console.log(userName); // will result in an undefined instead of getting an error
var userName = "Mr.Incognito";
/**bcz compiler does hoisting
 * var userName; and defines an initial value of undefined.
 * console.log(userName);
 * userName = 'Mr.Incognito';
 * 
*/


console.log(male); // will result in an error using before initialization.
let male = "vision";


console.log(female); // will result in an error
const female = "ultron";

