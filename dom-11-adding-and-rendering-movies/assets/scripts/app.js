const addMovieModal = document.getElementById('add-modal');
const StartAddMovieButton = document.querySelector('header button');
const BackDrop = document.getElementById('backdrop');
const CancelMovieModalButton = addMovieModal.querySelector('.btn--passive');
const AddMovieModalButton = CancelMovieModalButton.nextElementSibling;
const UserInputs = addMovieModal.querySelectorAll('input');
const EntryTextSection = document.getElementById('entry-text');

const movies = [];

const UpdateUI = function(){
  if(movies.length === 0) {
    EntryTextSection.style.display = 'block';
  }else{
    EntryTextSection.style.display = 'none';
  }
};

const RenderNewMovieElement = function(title, imageURL, rating){
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
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
}

const toggleMovieModal = function(){
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
};

const toggleBackdrop = function(){
  BackDrop.classList.toggle('visible');
};

const BackDropDismiss = function(){
  toggleMovieModal();
}

const DismissModalOnCancel = function(){
  toggleMovieModal();
  ClearMovieInputs();
}

const ClearMovieInputs = function(){
  for(const i of UserInputs){
    i.value= ''
  }
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
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue 
  }

  movies.push(newMovie);
  toggleMovieModal();
  ClearMovieInputs();
  RenderNewMovieElement(newMovie.title, newMovie.image, newMovie.rating);
  UpdateUI();
}

StartAddMovieButton.addEventListener('click',toggleMovieModal);
BackDrop.addEventListener('click', BackDropDismiss);
CancelMovieModalButton.addEventListener('click',DismissModalOnCancel);
AddMovieModalButton.addEventListener('click', AddMovieHandler);