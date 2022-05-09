// Ways to create and use Arrays . 

const numbers = [1,2,3,45];
// console.log(numbers);

const newnumbers = new Array(10); // []
console.log(newnumbers);

const morenumbers = Array.of(3,56);
console.log(morenumbers);

const fewmorenumbers = Array.from('Hello');
for( i in fewmorenumbers){
    console.log(fewmorenumbers[i]);
}

const listItems = document.querySelectorAll('li');
const ArrayofListItems = Array.from(listItems);
console.log(ArrayofListItems);

//Some other Examples of Arrays.

const hobbies = ['cooking', 'dancing'];
const personalData = [22, 'Stark', 'Developer', {moreDetails: []}];

const analytics = [[1, 1.6], [-5.4, 2.1]];