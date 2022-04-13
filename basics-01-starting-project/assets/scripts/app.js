const defaultValue = 0 ;
let currentValue = defaultValue;

function getUserInputasNumber(){
    return parseInt(userInput.value);
};

function createResultLog(operator, previousValue, CurrentValue){
    const calculationDescription = `${previousValue} ${operator} ${CurrentValue}`;     
    outputResult(currentValue ,calculationDescription);
}

function add(){
    const userInput = getUserInputasNumber();
    // const calculationDescription = `${currentValue} + ${userInput}`;
    // console.log(calculationDescription);
    const initialValue = currentValue;
    currentValue = currentValue + userInput ;
    createResultLog('+',initialValue, userInput);
    // outputResult(currentValue ,calculationDescription);
};

function subtract(){
    const userInput = getUserInputasNumber();
    const initialValue = currentValue;
    currentValue = currentValue - userInput;
    createResultLog('-', initialValue, userInput);      
};

function divide(){
    const userInput = getUserInputasNumber();
    const initialValue = currentValue;
    currentValue = currentValue / userInput;
    createResultLog('/', initialValue, userInput);      
    
};

function multiply (){
    const userInput = getUserInputasNumber();
    const initialValue = currentValue;
    currentValue = currentValue * userInput;
    createResultLog('*', initialValue, userInput);      
    
};


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);