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

//How does values affect
const testval=[1,2,5];
const newtest = testval;
testval.push(100);
console.log(newtest, testval);

//Slice Ranges
const testResults = [1, 7.5,-2,10.57];
console.log('using slice():');
console.log(testResults.slice());
console.log('Selecting first four elements using slice:\t'+testResults.slice(0,3));
console.log('Add element to the array and return a new array');
const storedResults = testResults.concat([28]);
console.log(storedResults);

//Retrieving
//works with primitive values and issue with reference values
console.log('Retrieving using indexof :');
console.log(storedResults.indexOf(7.5)); //starts from left and stops at the found of first occurence of the match
console.log(storedResults.lastIndexOf(7.5)); //starts from the right
//Reference value check
const personData = [{name: 'stark'},{name: 'Edward'}];
console.log('Value of reference data array :');
console.log(personData.indexOf({name:'stark'}));

//Another method to find the index.
const mr_stark = personData.find((person, index, personData)=>{
    return person.name === 'stark';
});
console.log('Find() in Javascript');
console.log(mr_stark);
mr_stark.name = 'Stark';
console.log('Manipulating the value');
console.log(mr_stark, personData);
//Finding the index with findIndex()
const stark_Index = personData.findIndex((person, index, personData)=>{
    return person.name === 'Edward';
});
console.log('Found index using the findIndex is:');
console.log(stark_Index);