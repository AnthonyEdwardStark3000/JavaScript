// const h1 = document.getElementById('main-title');

// h1.textContent = 'new text using DOM';
// h1.style.color = 'white';
// h1.style.backgroundColor = 'black';

// const li = document.querySelector('li:last-of-type');
// li.textContent = li.textContent + 'Additional Information';

// const body = document.body;

// // const ListItemElements = document.querySelectorAll('li');
// const ListItemElements = document.getElementsByTagName('li');

// for(const listItemEl of ListItemElements){
//     console.dir(listItemEl);
// }

const section = document.querySelector('section');
const button = document.querySelector('button'); 
section.className = 'blue-bg';

button.addEventListener('click', ()=>{
    // if(section.className === 'blue-bg visible'){
    //     section.className = 'red-bg invisible';
    // }
    // else{
    //     section.className = 'blue-bg visible';
    // }

    // section.classList.toggle('visible');
    section.classList.toggle('invisible');
});
