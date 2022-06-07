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