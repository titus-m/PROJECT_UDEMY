"use strict"



let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Cate filme ai privit deja?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Cate filme ai privit deja?', '');
    }
}

start();

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Unul din ultimele filme privite?', ''),
              b = prompt('Ce nota ii dai?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMoviesDB.movies[a] = b;
            console.log('Done!');
        } else {
            console.log('error');
            i--;
        }
    }
}

// rememberMyFilms();


function detectPersonalLevel() {
    if (personalMoviesDB.count < 10) {
        console.log('Ai privit putine');
    } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
        console.log('Esti un cinefil mediu');
    } else if (personalMoviesDB.count <= 30) {
        console.log('Esti kinoman');
    } else {
        console.log('S-a produs e eroare');
    }
}

// detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMoviesDB);
    }
}
    
showMyDB(personalMoviesDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMoviesDB.genres[i - 1] = prompt(`intreduceti genul preferat ${i}`);
        

    }
}

writeYourGenres();