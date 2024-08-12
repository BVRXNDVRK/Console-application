let lastFilm, filmRating, i = 1;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function start() {
    personalMovieDB.count = +prompt('How many films u watched?');
    
    while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('How many films u watched?');
    }
}

function rememberMyFilms() {   
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
}

function detectPersonalLvl() {
    if (personalMovieDB.count <= 10) {
        alert("small amount of films");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        alert("good amount of films");
    } else if (personalMovieDB.count > 30) {
        alert("big amount of films");
    } else {
        alert("error");
    }  
}

function writeYourGenres() {
    for (i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Your ${i + 1} favorite genre is`);
    }
}

function showMyDb() {
    if (personalMovieDB.privat == false)
        {
            console.log(personalMovieDB);
        }
    }
    
    start();
    rememberMyFilms();
    detectPersonalLvl();
    writeYourGenres();
    showMyDb();
    
    
    
    
    
    // OTHER SOLUTIONS \/ \/ \/
    
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