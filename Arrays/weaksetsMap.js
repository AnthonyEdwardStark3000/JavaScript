// Weak sets and weak maps 
//Weak sets can only store objects and will not contain much methods in it.

let myname = {name: "Suresh"};
const friendsName = new WeakSet(); // creating a weak set
friendsName.add(myname);
console.log(friendsName);

//This will be useful when we want the garbage collector to delete part of sets is no part of the code uses it.
//weak set -> when we want to store data in a set and want to eventually release some of the data to make sure that this can be garbage collected.

//Weak maps
const sampledataentry = new WeakMap();
sampledataentry.set(myname, 'simple guy');
myname = null;
console.log(sampledataentry);