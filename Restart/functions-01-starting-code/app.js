const startGameBtn = document.getElementById('start-game-btn');

function startGame(){
    console.log("Game Started ...");
}

const check = {
    functionCall: function greet(){
        console.log("Hello from method .");
    }
}
check.functionCall();

startGameBtn.addEventListener('click', startGame);