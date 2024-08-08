let numberOfFilms = +prompt('How many films u watched?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let lastFilm, filmRating, i = 1;

// while(i <= 3) {
//     lastFilm = prompt('Last film u watched?');
//     filmRating = prompt('this film rating');

//     if (lastFilm == '' || lastFilm == null || lastFilm.length > 50 || filmRating == '' || filmRating == null || filmRating.length > 50) {
//         alert('try again');
//     } else {
//         personalMovieDB.movies[lastFilm] = filmRating;
//         i++
//     }
// }

// do {
//     lastFilm = prompt('Last film u watched?');
//     filmRating = prompt('this film rating');

//     if (lastFilm == '' || lastFilm == null || lastFilm.length > 50 || filmRating == '' || filmRating == null || filmRating.length > 50) {
//         alert('try again');
//     } else {
//         personalMovieDB.movies[lastFilm] = filmRating;
//         i++
//     }
// } while(i <= 3)

for (i; i <= 3; i++) {
    lastFilm = prompt('Last film u watched?');
    filmRating = prompt('this film rating');

    if (lastFilm == '' || lastFilm == null || lastFilm.length > 50 || filmRating == '' || filmRating == null || filmRating.length > 50) {
        alert('try again');
        i--;
    } else {
        personalMovieDB.movies[lastFilm] = filmRating;
    }
}

if (personalMovieDB.count <= 10) {
    alert("small amount of films");
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    alert("good amount of films");
} else if (personalMovieDB.count > 30) {
    alert("big amount of films");
} else {
    alert("error");
}

console.log(personalMovieDB);
