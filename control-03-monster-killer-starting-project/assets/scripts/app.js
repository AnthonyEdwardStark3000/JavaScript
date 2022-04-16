const attack = 1;
const Strong_attack = 2;
const monster_attack = 4;
const healValue = 20;
const normalAttack = 'attack';
const heavyAttack = 'strong';

const enteredValue = parseInt(prompt('Choose the maximum life for you and the monster','100'));
let battleLog = [];
const playerAttack = 'player';
const playerStrongAttack = 'playerStrong';
const playerHeal = 'playerHeal';
const monsterAttack = 'Monster';
const gameOver = 'gameOver';

let maximumLife = enteredValue;
// let maximumLife;
if(isNaN(maximumLife) || maximumLife<=0){
    // maximumLife = 100;
    throw {message: "Invalid Input , it\'s not a number."};
}

let current_monsterHealth = maximumLife; 
let current_playerHealth = maximumLife; 
let has_additionalLife = true;

adjustHealthBars(maximumLife);

function reset(){
    current_monsterHealth = maximumLife; 
    current_playerHealth = maximumLife;
    resetGame(maximumLife); 
};

function endRound(){
    const initialPlayerHealth = current_playerHealth;
    const userDamage = dealPlayerDamage(monster_attack);
    current_playerHealth -= userDamage;
    console.log("player health:"+current_playerHealth);
    writeLog(monsterAttack, userDamage, current_monsterHealth, current_playerHealth);


    if(current_playerHealth<=0 && has_additionalLife){
        has_additionalLife = false;
        removeBonusLife();
        current_playerHealth = initialPlayerHealth; 
        alert("Used the final Life");
    }
    if(current_monsterHealth<=0 &&  current_playerHealth >0)
    {
        alert('You won the match');
        reset(); 
        writeLog(gameOver, 'Player Won', current_monsterHealth, current_playerHealth);   
    }
    else if(current_playerHealth <=0 &&  current_monsterHealth >0)
    {
        alert("Sorry boss you lose");
        reset(); 
        writeLog(gameOver, 'Monster Won', current_monsterHealth, current_playerHealth);   
    }
    else if(current_playerHealth<=0 && current_monsterHealth<=0)
    {
        alert("Match Draw");
        reset(); 
        writeLog(gameOver, 'Draw the match', current_monsterHealth, current_playerHealth);   
    }
};

function attackMonster(attackType){
    let damageAmount;
    let logEvent;
    if(attackType==normalAttack)
    {
        damageAmount = attack;
        console.log(typeof(damageAmount));
        console.log(damageAmount);
        logEvent = playerAttack;
    }else if(attackType == heavyAttack){
        damageAmount = Strong_attack; 
        console.log(typeof(damageAmount));
        console.log(damageAmount);
        logEvent = playerStrongAttack;
    }
    const damage = dealMonsterDamage(damageAmount);
    // console.log("Damage:"+damage);
    current_monsterHealth -= damage;
    // console.log("monster health:"+current_monsterHealth);
    writeLog(logEvent, damageAmount, current_monsterHealth, current_playerHealth);
    endRound();
}

function handleAttack(){
    attackMonster(normalAttack);
};

function handleHeavyAttack(){
    attackMonster(heavyAttack);
};

function writeLog(event, value, monsterHealth, playerHealth){
   let logEntry;
   if(event == playerAttack){
    logEntry = {
        event: event,
        value: value,
        target: 'Monster',
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
    };
    // battleLog.push(logEntry);
}else if(event == playerStrongAttack){
       logEntry = {
           event: event,
           value: value,
           target: 'Monster',
           finalMonsterHealth: monsterHealth,
           finalPlayerHealth: playerHealth,
       };
    //    battleLog.push(logEntry);
    }else if(event == monsterAttack){
        logEntry = {
            event: event,
            value: value,
            target: 'Player',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth,
        };
        // battleLog.push(logEntry);       
    }
    else if(event == playerHeal){
       logEntry = {
           event: event,
           value: value,
           target: 'Player',
           finalMonsterHealth: monsterHealth,
           finalPlayerHealth: playerHealth,
       };
    //    battleLog.push(logEntry);       
   }
    else if(event == gameOver){
       logEntry = {
           event: event,
           value: value,
           finalMonsterHealth: monsterHealth,
           finalPlayerHealth: playerHealth,
       };
    //    battleLog.push(logEntry);       
    }
    battleLog.push(logEntry);       
};

function healUser(){
    let heal;
    if(current_playerHealth >= maximumLife - healValue){
        alert('You can\'t use heal more than the maximum health');
        heal = maximumLife - current_playerHealth;    
    }
    else{
        heal = healValue;
    }

    increasePlayerHealth(healValue);
    if(current_playerHealth<=100){
        current_playerHealth += healValue;
    }
    writeLog(playerHeal, heal, current_monsterHealth, current_playerHealth);
    endRound();
};

function printLog(){
    for(let i=0; i<=battleLog.length;i++){
        console.log(battleLog[i]);
    }
    for(const logEnter of battleLog){
        console.log(logEnter);
    }
};

attackBtn.addEventListener('click', handleAttack);
strongAttackBtn.addEventListener('click', handleHeavyAttack);
healBtn.addEventListener('click', healUser);
logBtn.addEventListener('click',printLog)