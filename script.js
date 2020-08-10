"use strict"

const numberOfFilms = +prompt('Cate filme ai privit deja?', '');

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

console.log(personalMoviesDB);
