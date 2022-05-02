const addMovieModal = document.getElementById('add-modal');
const StartAddMovieButton = document.querySelector('header button');

const toggleMovieModal = function(){
  addMovieModal.classList.toggle('visible');
};

StartAddMovieButton.addEventListener('click',toggleMovieModal);
