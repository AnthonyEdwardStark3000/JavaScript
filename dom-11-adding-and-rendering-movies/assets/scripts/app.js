const addMovieModal = document.getElementById('add-modal');
const StartAddMovieButton = document.querySelector('header button');
const BackDrop = document.getElementById('backdrop');
const CancelMovieModalButton = addMovieModal.querySelector('.btn--passive');
const AddMovieModalButton = CancelMovieModalButton.nextElementSibling;
const UserInputs = addMovieModal.querySelectorAll('input');
const EntryTextSection = document.getElementById('entry-text');
//const EntryTextSection = document.getElementById('entry-text');
//const EntryTextSection = document.getElementById('entry-text');

const movies = [];

const UpdateUI = function(){
  if(movies.length === 0) {
    EntryTextSection.style.display = 'block';
  }else{
    EntryTextSection.style.display = 'none';
  }
};

const RenderNewMovieElement = function(id, title, imageURL, rating){
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
  <div class='movie-element__image'>
  <img src='${imageURL}' alt='${title}'>
  </div>

  <div class='movie-element__info'>
  <h2>${title}</h2>
  <p>${rating}/5 Stars</p>
  </div>
  `;
  newMovieElement.addEventListener('click', DeleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
}

const AddMovieModal = function(){
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
};

const toggleBackdrop = function(){
  BackDrop.classList.toggle('visible');
};

const closeMovieModal = function(){
  addMovieModal.classList.remove('visible');
}

const BackDropDismiss = function(){
  closeMovieModal();
}

const DismissModalOnCancel = function(){
  closeMovieModal();
  ClearMovieInputs();
}

const ClearMovieInputs = function(){
  for(const i of UserInputs){
    i.value= ''
  }
}

const DeleteMovie = movieId =>{
  let movieIndex = 0;
  for(let i in movies){
    if(movieId == i.id){
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove();
}

const DeleteMovieHandler = function(movieId){
  const deleteMovieModal = document.getElementById('delete-modal');
  deleteMovieModal.classList.add('visible');
  toggleBackdrop();
  // DeleteMovie();
}

const AddMovieHandler = function(){
  const titleValue = UserInputs[0].value;
  const imageUrlValue = UserInputs[1].value;
  const ratingValue = UserInputs[2].value;
  if(titleValue.trim() === '' || imageUrlValue.trim() === '' || ratingValue.trim() === ''|| +ratingValue < 1 || +ratingValue > 5){
    alert('Please enter valid Ratings between 1 and 5');
    return;
  }

  newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue 
  }

  movies.push(newMovie);
  closeMovieModal();
  ClearMovieInputs();
  RenderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
  UpdateUI();
}

StartAddMovieButton.addEventListener('click',AddMovieModal);
BackDrop.addEventListener('click', BackDropDismiss);
CancelMovieModalButton.addEventListener('click',DismissModalOnCancel);
AddMovieModalButton.addEventListener('click', AddMovieHandler);
