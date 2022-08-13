const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'Draw';
const RESULT_PLAYER_WINS = 'Player Wins';
const RESULT_COMPUTER_WINS = 'Computer Wins';
let winner;

let gameIsRunning = false;

const getPlayerChoice = function(){
    const selection = prompt(`Enter your choice ${ROCK}, ${PAPER} or ${SCISSORS} :`, '').toUpperCase();
    if(selection !== ROCK && selection!== PAPER && selection!== SCISSORS){
        alert(`we chose ${ROCK} for you .`);
        return;
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

const getWinner = function(compChoice , playerChoice = DEFAULT_USER_CHOICE){
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
    let winner;
    if(playerChoice){
        winner = getWinner(computerChoice ,playerChoice);
    }
    else{
        winner = getWinner(computerChoice);
    }
    let message = `Player chose ${playerChoice ? playerChoice: DEFAULT_USER_CHOICE} and computer chose ${computerChoice}\n${winner} the game.`;
    if(winner==RESULT_DRAW){
        this.message = message + "so it's a draw.";
    }
    else if(winner==RESULT_PLAYER_WINS){
        this.message = message + "so you won.";
    }
    else{
        this.message = message + "lost.";
    }
    alert(message);
    gameIsRunning = false;
});

const sumUp = function(...numbers){
    const validateNumber = function(number){
       return isNaN(number) ? 0: number;
    }

    let sum =0;
    for(const num of numbers)
    {
        // sum += num;
        sum += validateNumber(num);
    }
    return sum;
};

// console.log(sumUp(1,2,3,4,5,6,7));
// console.log(sumUp(1,2));
// console.log(sumUp(10,5,5));

console.log(sumUp('h'));
