'use strict';

/* tady bude tvůj kód */
console.log('JavaScript ve stránce funguje');

const movieList = document.querySelector('#movies');
const showMovies = () =>{
fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
    .then((resp) => resp.json())
    .then((data) => {
        
        data.forEach((movie) => {
            const movieTemplate = `
            <div class="movie">
                <img class="movie__img" src="${movie.posterUrl}" alt="${movie.title}">
                <a href="${movie.url}"><h2 class="movie__title">${movie.title}</h2></a>
                <p class="movie__year">${movie.year}</p>
                <p class="movie__genre">${movie.genres.join(', ')}</p>
            </div>
            ` 
            movieList.innerHTML = movieTemplate;
            console.log(movie);
        });
    });
}

showMovies();
