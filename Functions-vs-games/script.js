const startGamebutton = document.getElementById('startGame');
const checkButton = document.getElementById('check');
const AnonymousButton = document.getElementById('anonymous');

//Function in a property is known as method.

function startGame(){
    console.log("Game Starting...");
}
const person = {
    name:'Mr.Stark', //Termed as property
    greet: function greet(){ //Termed as method
        console.log('hi');
    }
};
console.log(person);
person.greet();

startGamebutton.addEventListener('click', startGame);

// Functions are themselves an object.
console.log(typeof startGame);
console.dir(startGame); // so functions are objects.

// Storing functions in a variable.

const start = function starts(){   //anonymous function.
    console.log("Function start from the variable.");
}

checkButton.addEventListener('click', start);

//Function Declaration vs Function Expression
// Func Dec 
// function mul(num1,num2){
//     console.log(mul1*mul2);
// } can be done even after calling this function .

// Func Exp 
// const multiply = function(a, b){
//     console.log(a*b);
// }; //If this is called before this step it will yield undefined value.


// Anonymous function 
AnonymousButton.addEventListener('click', function(){
    console.log("Called the anonymous function");
});