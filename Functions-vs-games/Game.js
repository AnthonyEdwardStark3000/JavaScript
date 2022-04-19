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
const decideWinner = (player, comp)=>{
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
});