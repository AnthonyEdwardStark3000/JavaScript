// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// const copyArray = testResults.concat([-3,-1],[0,9]);
// testResults.push([10,20,40]);
// console.log(copyArray, testResults);
// console.log(testResults.indexOf(1), testResults.indexOf(100));

const check =[5,1,2,12,1,4];
// console.log(check.indexOf(1));

const sampleNames = [{name:"Anthony"},{name:"Edward"},{name:"Stark"}];
//return the matching name in the object
const stark = sampleNames.find((person, index, persons)=>{
    return person.name === 'Stark';
});
console.log('Matching name in the object:',stark);

//return the index of the matching name in the object
const starkIndex = sampleNames.findIndex((person, index, persons)=>{
    return person.name === 'Stark';
});

console.log('The index of stark is :'+starkIndex);

console.log(check.includes(3000));

const prices = [10,20,45,90];
const tax = 0.9;
const priceWithTax = [];

prices.forEach((price, index, prices)=>{
    const priceObject = {
        index: index,
        taxedPrice: price*(1+tax),
    }
    priceWithTax.push(priceObject);
});
console.log(priceWithTax);

const sorted = check.sort((a,b)=>{
    if(a>b){
        return 1;
    }
    else if(a===b)
    {
        return 0;
    }
    else {
        return -1;
    }
});
console.log(sorted.reverse());

const FilteredArray = prices.filter((price, index, prices)=>{
    return price > 10;
});
console.log(FilteredArray);