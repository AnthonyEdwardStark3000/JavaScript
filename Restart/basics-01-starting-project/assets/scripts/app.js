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

function add(){
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput("+", initialResult, currentResult);
    writeToLog("Add", initialResult, enteredNumber, currentResult);

}

function subtract(){
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput("-", initialResult, currentResult);
    writeToLog("Subtract", initialResult, enteredNumber, currentResult);

}

function multiply(){
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput("*", initialResult, currentResult);
    writeToLog("Multiply", initialResult, enteredNumber, currentResult);

}

function divide(){
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput("/", initialResult, currentResult);
    writeToLog("Divide", initialResult, enteredNumber, currentResult);

}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);