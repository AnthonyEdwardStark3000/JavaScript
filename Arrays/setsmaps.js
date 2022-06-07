// const ids = new Set();
//can also pass in anydata to create Sets like array, data, sets
const ids = new Set(["This","is","An","Set"]);
console.log("Sets to eliminate Duplicates");
console.log(ids);
console.log("Checking for a particular value:"+ids.has(3000));

//Iteration
console.log("Iterating through a set using entries method\nAnd the set has the following values in it :");
//Entries return iterable of Arrays 2 entries / element per entry
for(const entry of ids.entries()){
    console.log(entry);
}
//Adding a new element
console.log("Adding an new element to the set");
ids.add("Example");
//Iterating through values
console.log("Iterating through a set using values method\nAnd the set has the following values in it :");
//Values return iterable of 1 element per entry
for(const entry of ids.values()){
    console.log(entry);
}
console.log('Deleting an element:');
ids.delete("Check");
//deleting an invalid element in the set will not throw an error but will do nothing.
for(const entry of ids.values()){
    console.log(entry);
}

//Maps
//Purpose of Maps is to attach additional information to an object property but not merge information to the object

const person1 = {name: "Stark"};
const person2 = {name: "Anthony"};
const personMapData = new Map([[person1, [{skills: "C, C++, Java, Python, DataStructures", value: 3}]]]);
console.log("Person1 Data:");
console.log(person1);
console.log("Person Data with Map");
console.log(personMapData);
console.log("Adding value to another variable using the map value created");
personMapData.set(person2, [{skills: "Python", value: 7}]);
console.log("Person2 Data:");
console.log(person2);

//using entries function to go-through the map
console.log("using entries function to go-through the map");
for(const entry of personMapData.entries()){
    console.log(entry);
}
