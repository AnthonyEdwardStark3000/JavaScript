// document.write("Hello from js")
// alert('Page loaded')
// console.log("Console log")

// document.write({name:"Hello from js"})
// alert({name:'Page loaded'})
// console.log({name:"Can you see me"})

function calculate(value)
{
    // console.log("The value is :"+value*2.54+"cm");
    // return value;
    const newvalue = value*2.54;
    return newvalue;
}


const name="john"
const lastname="jordan"
const value= name -lastname;
console.log(value);
let number1='100';
let number2='20';
let answer= number1 -number2;
console.log(answer);
const width=1000;
const height=20;
const valu=[width,height];
console.log(valu);
console.log(valu[1]);
calculate(width);
let wallheight=100;
let testwidth=calculate(100);
let testheight=calculate(wallheight);
console.log(testwidth);
const dimensions=[testwidth,testheight];
console.log(dimensions);