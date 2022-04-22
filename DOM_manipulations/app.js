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