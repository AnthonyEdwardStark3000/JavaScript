const addMovieBtn = document.getElementById("add-movie-btn"); 
const SearchBtn = document.getElementById("search-btn"); 
const movies = [];

const renderMovies = (filter = '')=>{
    const movieList = document.getElementById('movie-list');

    if(movies.length === 0){
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';

    const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));

        filteredMovies.forEach((movie)=>{
        const movieEl = document.createElement('li');
        let text = movie.info.title + ' - ';
        for(const key in movie.info){
            if(key !='title'){
            text = text + `${key} : ${movie.info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    });
}

const addMovieHandler = ()=>{
    const title = document.getElementById("title").value;
    const extraName = document.getElementById("extra-name").value;
    const extraValue = document.getElementById("extra-value").value;

    if(title.trim() == " " ||extraName.trim() == " " ||extraValue.trim() == " "){
        return;
    }

    //Constructing an object
    const newMovie = {
        // title: title, value and key is same name so we can do as follow
        // title,
        info:{
            title,
            [extraName]: extraValue
        },
        id: Math.random()
    };

    movies.push(newMovie);
    // console.log(newMovie);
    renderMovies();
}

//Filter function
const searchMovieHandler = ()=>{
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
}


addMovieBtn.addEventListener('click', addMovieHandler);
SearchBtn.addEventListener('click', searchMovieHandler);

//console.log('check the application');
//console.log('filter operation done');