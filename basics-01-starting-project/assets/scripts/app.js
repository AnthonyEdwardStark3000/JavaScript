const defaultValue = 0 ;
let currentValue = defaultValue;
let logEntries = [];
//Array is a special type of object in Javascript
// check = [1,24,5]
// console.log(typeof(check)) will print object
//type of undefind is undefined , null is object, NaN is number.

function getUserInputasNumber(){
    return parseInt(userInput.value);
};

function createResultLog(operator, previousValue, CurrentValue){
    const calculationDescription = `${previousValue} ${operator} ${CurrentValue}`;     
    outputResult(currentValue ,calculationDescription);
}

function objectLog(operationPerformed, previousVal, currentVal, userInput){
    //Objects
    const logEntry = {
        operation: operationPerformed,
        initialVal: previousVal,
        numberEntered: userInput,
        finalVal: currentVal
    };

    // logEntries.push(userInput);//Arrays
    logEntries.push(logEntry); 
    console.log(logEntries);
    console.log(logEntry.operation); //Accessing a particular value from an object.
}

function calculateResult(calculationType){
    const userInput = getUserInputasNumber();
    const initialValue = currentValue;
    let MathOperator;
    if(calculationType === 'add')
    {
    currentValue += userInput;
    MathOperator = "+"; 
}
else if(calculationType === 'sub'){
    currentValue -= userInput;
    MathOperator = "-"; 
}
else if(calculationType === 'mul'){
    currentValue *= userInput;
    MathOperator = "*"; 
}
else {
    currentValue /= userInput;
    MathOperator = "/"; 
}
    createResultLog(MathOperator, initialValue, userInput);      
    objectLog(calculationType, initialValue, currentValue, userInput);    
}


function add(){
    // const userInput = getUserInputasNumber();
    // // const calculationDescription = `${currentValue} + ${userInput}`;
    // // console.log(calculationDescription);
    // const initialValue = currentValue;
    // // currentValue = currentValue + userInput ;
    // currentValue += userInput ;
    // createResultLog('+',initialValue, userInput);
    // // outputResult(currentValue ,calculationDescription);
    
    // // //Objects
    // // const logEntry = {
    // //     operation: "Addition",
    // //     initialVal: initialValue,
    // //     numberEntered: userInput,
    // //     finalVal: currentValue
    // // };

    // // // logEntries.push(userInput);//Arrays
    // // logEntries.push(logEntry); 
    // // console.log(logEntries);
    // // console.log(logEntry.operation); //Accessing a particular value from an object.
    // objectLog('Addition', initialValue, currentValue, userInput);
    calculateResult("add");
};

function subtract(){
    // const userInput = getUserInputasNumber();
    // const initialValue = currentValue;
    // currentValue -= userInput;
    // createResultLog('-', initialValue, userInput);      
    // objectLog('Subtraction', initialValue, currentValue, userInput);
    calculateResult('sub');
};

function divide(){
    // const userInput = getUserInputasNumber();
    // const initialValue = currentValue;
    // currentValue /= userInput;
    // createResultLog('/', initialValue, userInput); 
    // objectLog('Division', initialValue, currentValue, userInput);     
    calculateResult('div');
    
};

function multiply (){
    // const userInput = getUserInputasNumber();
    // const initialValue = currentValue;
    // currentValue *= userInput;
    // createResultLog('*', initialValue, userInput);   
    // objectLog('Multiplication', initialValue, currentValue, userInput);   
    calculateResult('mul');
    
};


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);