const numbers = [1,2,3];
console.log(numbers);

const moreNumbers = new Array();
moreNumbers.push(12);
moreNumbers.push(10);
console.log(moreNumbers);

const anotherMethod = new Array(1,5);
console.log(anotherMethod);

const nextMethod = Array.of(1,3);
console.log(nextMethod);

//using Iterable
const finalMethod = Array.from('Hello');
console.log(finalMethod);

const readData = document.querySelectorAll('li');
const ArrayFromData = Array.from(readData);
console.log(ArrayFromData);

const hobbies = ['sleeping', 'movies'];
//add element at the last
hobbies.push('gaming');
//add element at the first position
hobbies.unshift('coding');
console.log(hobbies);

//Remove last element
hobbies.pop();
console.log(hobbies);

//Remove first element
hobbies.shift();
console.log(hobbies);

//Manipulating items
hobbies[1] = 'Coding';
console.log(hobbies);

//using splice to delete element
hobbies.splice(0,1);
console.log(hobbies);

//using splice to add element
hobbies.splice(0,0,'Debugging');
console.log(hobbies);

//using splice to add element
hobbies.splice(1,0,'Deploying');
console.log(hobbies);