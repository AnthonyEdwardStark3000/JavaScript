const GameStartButton  = document.getElementById('startGame');
const Rock = 'ROCK';
const Paper = 'PAPER';
const Scissors = 'SCISSORS';
const DefaultUserChoice = 'ROCK';
let isGameRunning = false;

const getComputerChoice = function(){
    const randomValue = Math.random();
    if(randomValue < 0.34)
    {
        return Rock;
    }else if(randomValue < 0.7)
    {
        return Paper;
    }
    else{
        return Scissors;
    }
};

const getPlayerChoice = function(){
    const selectionMade = prompt(`${Rock}, ${Paper}, or ${Scissors} please make your choice:`).toUpperCase();
    if(
        selectionMade!== Rock && 
        selectionMade!== Paper && 
        selectionMade!== Scissors){
            alert('Invalid selection and we chose Rock for you by default.');
            return DefaultUserChoice;
    }
    else{
        return selectionMade;
    }

}

// const decideWinner = function(player, comp){
    // Arrow functions
    // () =>{} is not preferred
    // const variable_name = () =>{} is how it's actually done.
    // {} and return statements can also be omitted
    // const add = (a, b)=> a+b;
    // If there is only one argument then even the () can be omitted
    // const add = a=> a+10;
const decideWinner = (player = DefaultUserChoice, comp)=>{
    return player == comp ? "Draw":
        player == Rock && comp == Scissors ||
        player == Scissors && comp == Paper ||
        player == Paper && comp == Rock ? "Player won" : "Computer won"
    // if(
    //     player == Rock && comp == Scissors ||
    //     player == Scissors && comp == Paper ||
    //     player == Paper && comp == Rock
    //     )
    //     {
    //         console.log(`You won you chose ${player} and System chose ${comp}`);
    //     }
    //     else if(
    //         comp == Rock && player == Scissors ||
    //         comp == Scissors && player == Paper ||
    //         comp == Paper && player == Rock
    // ){
    //     console.log(`You Lose you chose ${player} and System chose ${comp}`);
    // }
    // else{
    //     console.log(`It's an draw as you chose ${player} and System chose ${comp}`);
    // }
}

GameStartButton.addEventListener('click', function(){
    if(isGameRunning){
        return;
    }
    isGameRunning = true;
    console.log('Started the game from external server');
    const playerSelection = getPlayerChoice();
    const systemSelection = getComputerChoice();
    const finalResult = decideWinner(playerSelection, systemSelection);
    console.log(`Player chose ${playerSelection} and the computer chose ${systemSelection} and so it's an ${finalResult}`);
    alert(`You chose ${playerSelection} and the computer chose ${systemSelection} and so it's an ${finalResult}`);
    isGameRunning = false;
});

//Using functions with flexible arguments.
//Approach number1
function sumCheck(number1){
    let result = 0;
    for(const num of number1){
        result+=num;
    }
    return result;
}

console.log(sumCheck([1,2,7]));
console.log(sumCheck([1,2,7,5,3,0,4,-2]));

//Approach number2
function mulCheck(...number1){ // ...Rest operator should always be the last element (...number1, number2) will show an error. 
    let result = 1;
    for(const num of number1){
        result = result*num;
        if(result == -0)
        {
            return 0;
        }
    }
    return result;
}

console.log(mulCheck(1,2,7));
console.log(mulCheck(1,2,7,5,3,4,-2));

//Functions inside an function.
function addition(a, b){
    let answer = (numbers)=>{
        return numbers+10;
    } 
    let resuld = 0;
    resuld += answer(a);
    resuld = resuld+ a + b;
    return resuld;
}

console.log(addition(5,5));

//Callback functions
function callBack(resultHandler,...num){
    function validateNumber(number){
        return isNaN(number)? 0 :number;
    };
    let sum =0;
    for(const n of num){
        sum+= validateNumber(n);
    }
    resultHandler(sum);
}
function showResult(N){
    console.log(`The final Result after adding all the numbers is : ${N}`);
}
callBack(showResult,1,3,5,6,8);
