let numberOfFilms = +prompt('How many films u watched?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let lastFilm = prompt('Last film u watched?'),
    filmRating = prompt('this film rating');

personalMovieDB.movies[lastFilm] = filmRating;

console.log(personalMovieDB);
