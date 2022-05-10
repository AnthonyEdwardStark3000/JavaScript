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

const analytics = [[1, 1.6], [-5.4, 2.1], 'String element'];

for(data of analytics){
    for(dataelements of data){
        console.log('Data stored in Array: '+ dataelements);
    }
}
// Adding data to array
const languages = ['Angular','ionic','React js'];
languages.push('PHP'); //Add element to the end of the Array //returns number (i.e) length of the Array
console.log(languages)
//Add elements to the beginning of the Array
languages.unshift('c'); //returns number (i.e) length of the Array
console.log(languages);
languages.unshift('c++','Java','Python');
console.log(languages);

//use unshift to append elements to the beginning of the Array.
//Removing last element in an array
const poppedValue = languages.pop();
console.log('Pop +'+languages);

//Pop returns the value so we can also store it.
console.log('Value Popped from the Array is: '+poppedValue);
//Edit an element in an array
languages.shift(); //Moves first element to the left (i.e) delete.
console.log('shift: '+languages);

//Editing an particular element in an Array
languages[4]='Ionic';
console.log('Edit with index: '+languages);

//Targetting exceeded index
languages[100] = 'coding';
console.log('Adding weird Index'+languages);
console.log('Targeting non-existing index: '+languages[100])

//Splice to add elements between two elements
languages.splice(0,0, 'Oracle');

//splice(startelement, Deleteelements, Value to be inserted);
console.log('After using splice for changing first element in Array: '+languages)
console.log('Using splice for deletion');
languages.splice(0,1);
console.log(languages);

//splice to delete Everything
console.log('Using Splice to delete Everything');
const splicedElements = languages.splice(0); //returns removed elements
console.log(languages);
console.log('Values returned by splice function: '+splicedElements);