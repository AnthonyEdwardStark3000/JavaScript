const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'Draw';
const RESULT_PLAYER_WINS = 'Player Wins';
const RESULT_COMPUTER_WINS = 'Computer Wins';

let gameIsRunning = false;

const getPlayerChoice = function(){
    const selection = prompt(`Enter your choice ${ROCK}, ${PAPER} or ${SCISSORS} :`, '').toUpperCase();
    if(selection !== ROCK && selection!== PAPER && selection!== SCISSORS){
        alert(`we chose ${ROCK} for you .`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
}

const getComputerChoice = function(){
    const randomValue = Math.random();
    if(randomValue < 0.34){
        return ROCK;
    }
    else if(randomValue < 0.67){
        return PAPER;
    }
    else{
        return SCISSORS;
    }
}

const getWinner = function(compChoice , playerChoice){
    if(compChoice === playerChoice){
        return RESULT_DRAW;
    }
    else if(compChoice === ROCK && playerChoice === PAPER || compChoice === PAPER && playerChoice === SCISSORS || compChoice === SCISSORS && playerChoice ===ROCK){
        return RESULT_PLAYER_WINS;
    }
    else{
        return RESULT_COMPUTER_WINS;
    }
}

startGameBtn.addEventListener('click', function(){
    if(gameIsRunning){
        alert(`Sorry can't start another game as it is already running.`);
        return;
    }
    gameIsRunning = true;
    console.log('Starting the game ..');
    const playerChoice =  getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice ,playerChoice);
    console.log(`Player chose ${playerChoice} and computer chose ${computerChoice}\n${winner} the game.`);
});


