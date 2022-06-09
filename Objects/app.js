/*Objects 
 In js values are of two types primitive and Reference values and The Reference values are known as Objects, Even Arrays are objects in existence*/ 
 //creating an object and working with it
 let person_details = {
    name: 'suresh',
    age: 22,
    hobbies: ['Skating','Shettle'],
    greet: function(){
        alert('Hello everybody');
    }
 }

 person_details.isAdmin = true;
 console.log(person_details);

 //Deleting a property

 delete person_details.age;
 console.log(person_details);
 //printing value not in existence
 console.log(person_details.age);
 console.log("Adding undefined value to person_details.age");
 person_details.age = undefined;
 console.log(person_details.age);
 
 // adding value to null
 person_details.age = null;
 console.log(person_details.age);
 
 //using '' and [] for objects
 let new_person={
     'first name': 'stark'
 }
 console.log(new_person['first name']); //if this is used without '' the Js will search for the variable first name in this entire file
//  console.log(new_person[first name]); 

//using number as key
let second_new_person={
    'first name': 'check',
    1.6: 'number entered is 1.6'
}

console.log("Using number as key in an object: "+second_new_person[1.6]);

//dynamically assign and access key values.

const dummy = "check";

let check_variable ={
   [dummy]: 'simple variable' 
};
const sample = 'simple';

console.log(check_variable);
//Dynamically access
console.log([sample]);
