// const allLists = document.querySelectorAll('li');
const h1 = document.getElementById('main-title');
h1.textContent = "DOM Manipulation. Some people fail a lot... Fail to see what they should see";
h1.style.color = 'Green';
h1.style.backgroundColor = 'black';

const li = document.querySelector('li:last-of-type');
li.textContent = 'Last element';

const body = document.body;
body.style.color = 'blue';

const head = document.head;
head.style.fontStyle = 'italic';

const allLists = document.getElementsByTagName('li');
for(let el of allLists){
    console.dir(el);
}

//Selecting siblings
// Might sometimes be a bit messy one as if we add some sections we may be changing the child order
// const unorderedList = document.body.firstElementChild.nextElementSibling;
// const first_element_child =  unorderedList.firstElementChild;
// console.log(first_element_child);

//styling with dom
const section = document.querySelector('section');
console.log(section);
section.style.backgroundColor = 'violet';

const h3Element = document.querySelector('h3');
console.log(h3Element);
h3Element.className = 'bg-red';

const button = document.querySelector('button');
button.addEventListener('click', ()=>{
  
    // if(section.className === 'bg-red visible'){
    //     section.className = 'bg-red invisible'    
    // } else {
    //     section.className = 'bg-red visible'    
    // }
    section.className = 'bg-red visible';
    
    section.classList.toggle('visible');
    section.classList.toggle('invisible');

    section.innerHTML = '<h5>ALtered the html structure itself</h4>';
    // Adding new element to the existing elements
    const uls= document.querySelector('ul');
    uls.innerHTML = uls.innerHTML + '<li>Final one element to check</li>'
});