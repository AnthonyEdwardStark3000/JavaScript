// alert("Javascript");
var count=0;
function display()
{
    console.log("Button is clicked");
    count+=1;
    document.getElementById("areaTodisplay").innerHTML=count;
    if(count==7)
    {
        alert("Clicked the button several times");
    }
}
function loaded()
{
    console.log("html body has been loaded");
}
function convert()
{
username=document.getElementById("notunique");
username.value=username.value.toUpperCase();
console.log("userval");
}