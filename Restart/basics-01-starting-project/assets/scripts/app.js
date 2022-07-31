const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];    

function getUserInputNumber(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calculationDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult,calculationDescription);
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult){
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };

    logEntries.push(logEntry);
    console.log(logEntries);

}

function CalculateResult(calculationType){
    
    const enteredNumber = getUserInputNumber();
    if(calculationType !='ADD' && calculationType !='SUBTRACT' && calculationType !='MULTIPLY' && calculationType !='DIVIDE' || !enteredNumber){
        return;
    }
    
    if(
        calculationType =='ADD' || 
        calculationType =='SUBTRACT' || 
        calculationType =='MULTIPLY' || 
        calculationType =='DIVIDE'
        ){
    const initialResult = currentResult;
    let mathOperator;
    if(calculationType === 'ADD'){
        mathOperator = '+';
        currentResult = currentResult + enteredNumber;
    }
    else if(calculationType === 'SUBTRACT'){
        mathOperator = '-';
        currentResult = currentResult - enteredNumber;
    }
    else if(calculationType === 'MULTIPLY'){
        mathOperator = '*';
        currentResult = currentResult * enteredNumber;
    }
    else if(calculationType === 'DIVIDE'){
        mathOperator = '/';
        currentResult = currentResult / enteredNumber;
    }

    createAndWriteOutput(mathOperator, initialResult, currentResult);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
    }
    
}

function add(){
    CalculateResult('ADD');
}

function subtract(){
    CalculateResult('SUBTRACT')
}

function multiply(){
    CalculateResult('MULTIPLY')
}

function divide(){
    CalculateResult('DIVIDE')
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);