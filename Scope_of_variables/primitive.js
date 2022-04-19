//Primitive and Reference values in Javascript.
// Primitive -> String, Numbers, Booleans, null, undefined, symbol.
// Reference -> Stored normally on the stack memory, and variables store a pointer to the location in memory. 
let checker = 'check';
console.log(this.checker);
let anotherName = this.checker;
console.log(anotherName);
checker = 'checker'; 

//Detailed comparison of pointers
let hobbies = ['programming'];
console.log(hobbies);
let newHobbies = hobbies;
console.log(newHobbies);
hobbies.push('debugging');
console.log(newHobbies); //Print the values along with the debugging.

let person = {age: 30}
// console.log {age: 30}
let anotherperson = person
// console.log {age: 30}
anotherperson.age = 32
// console.log 32
person
// console.log {age: 32}

// let newperson = person; //can be done like
let newperson = {...person};
console.log(newperson);
person.age = 40;
console.log(newperson); //not updated bcz its not an reference it's an copy by spread operator.
let morehobbies = [...hobbies];
hobbies.push('dance');

console.log("Hobbies : "+hobbies);
console.log("moreHobbies : "+morehobbies); //last pushed value will not be reflected here , as it is not an pointer

//comparison
let check1 = {age: 30};
console.log(check1);
let check2 = {age: 30};
console.log(check2);
console.log(check1==check2); //return false bcz here it does not compare the stored value , but the memory location .  

//push to constant
const stark = ['Genius', 'Billionaire', 'PlayBoy'];
console.log(stark);
stark.push('Philonthropist');
console.log(stark);
//will get pushed bcz the changes takes place in the memory address.
// stark = ['Hover'] // will throw an error bcz it tries to assign new value in the same address.
const jarvis = {age: 2};
console.log(jarvis);
jarvis.age = 1;
console.log(jarvis);
