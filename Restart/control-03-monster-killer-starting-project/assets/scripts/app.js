const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_PLAYER = 20;
const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

function getMaxLifeValues(){
    const enteredValue = prompt('Maximum life for you and monster:','100');
    const parsedValue = parseInt(enteredValue);

    if(isNaN(parsedValue)||parsedValue <= 0){
        throw {
            message : 'Invalid User Input, not a number !'
        };
    }
    return parsedValue;
}

let chosenMaxLife;
try{
    chosenMaxLife = getMaxLifeValues(); 
}
catch(err)
{
    console.log(err);
    chosenMaxLife = 100;
    alert('Invalid input and Default value 100 is taken');
}
finally{
    console.log('Proceeding with the function after exception handling.');
}   

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

let hasBonusLife = true;
let battleLog = [];

adjustHealthBars(chosenMaxLife);

function writeToLog(ev, val, monsterHealth, playerHealth){
    let logEntry;
    switch(ev){
        case LOG_EVENT_PLAYER_ATTACK:
            logEntry = {
                event: ev,
                value: val,
                target: 'MONSTER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth,
            };
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:    
        logEntry = {
            event: ev,
            value: val,
            target: 'MONSTER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth,
        };
        break;
        case LOG_EVENT_MONSTER_ATTACK:
            logEntry = {
                event: ev,
                value: val,
                target: 'PLAYER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth,
            };
            break;
        case  LOG_EVENT_PLAYER_HEAL:   
        logEntry = {
            event: ev,
            value: val,
            target: 'PLAYER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth,
        };
        break;
        case LOG_EVENT_GAME_OVER:
            logEntry = {
                event: ev,
                value: val,
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth,
            };
            break;
        default:
            logEntry = {};    
    }
    battleLog.push(logEntry);
}

function reset(){
     currentMonsterHealth = chosenMaxLife;
     currentPlayerHealth = chosenMaxLife;
     resetGame(chosenMaxLife);
}

function endRound(){
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth-=playerDamage;
    writeToLog(LOG_EVENT_MONSTER_ATTACK, playerDamage, currentMonsterHealth, currentPlayerHealth);

    if(currentPlayerHealth<=0 && hasBonusLife){
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('Bonus Life activated');
    }

    if(currentMonsterHealth<=0 && currentPlayerHealth>0)
    {
        alert('Player Won !');
        writeToLog(LOG_EVENT_GAME_OVER, 'PLAYER_WON', currentMonsterHealth, currentPlayerHealth);
    }
    else if(currentPlayerHealth<=0 && currentMonsterHealth>0){
        writeToLog(LOG_EVENT_GAME_OVER, 'MONSTER_WON', currentMonsterHealth, currentPlayerHealth);
        alert('Monster Won !');
    }
    else if(currentPlayerHealth<=0 && currentMonsterHealth<=0){
        writeToLog(LOG_EVENT_GAME_OVER, "IT'S A DRAW", currentMonsterHealth, currentPlayerHealth);
        alert("It's a draw !");
    }
    
    if(currentMonsterHealth<=0 || currentPlayerHealth<=0){
        reset();
    }
}

function attackMonster(mode){   
    const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
    const logEvent = mode === MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;
    // if(mode == MODE_ATTACK){
    //     maxDamage = ATTACK_VALUE;
    //      logEvent = LOG_EVENT_PLAYER_ATTACK;
    // } 
    // else if(mode == MODE_STRONG_ATTACK){
    //     maxDamage = STRONG_ATTACK_VALUE;
    //      logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    // }   

    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth-=damage;

    writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);

    endRound();
}

function attackHandler(){
   attackMonster(MODE_ATTACK);
}

function strongAttackHandler(){
   attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler(){
    let healValue;
    if(currentPlayerHealth >=chosenMaxLife -HEAL_PLAYER){
        alert("You can't heal more than max health");
        healValue = chosenMaxLife - currentPlayerHealth;
    }
    else{
        healValue = HEAL_PLAYER;
    }
        increasePlayerHealth(healValue);
        currentPlayerHealth += healValue;

        writeToLog(LOG_EVENT_PLAYER_HEAL, healValue, currentMonsterHealth, currentPlayerHealth);

        endRound();
}

function printLogHandler(){
    for(const logEntry of battleLog)
    {
        console.log(logEntry);
    }
}

attackBtn.addEventListener('click',attackHandler);
strongAttackBtn.addEventListener('click',strongAttackHandler);
healBtn.addEventListener('click',healPlayerHandler);
logBtn.addEventListener('click',printLogHandler);