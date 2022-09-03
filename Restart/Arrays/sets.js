const id = new Set([1,2,3,1,4,3]);
id.add(3);
id.add(20);
for(const data of id.entries()){
    console.log(data[0]);
}

const person1 = {name:'suresh', age:22};
const personData = new Map([[person1, [{nationality:'Indian'}]]]);

console.log(personData);