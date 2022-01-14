const movies = require('./data');
//console.log(movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(data) {
  const directors = data.map((person) => {
    return person.director;
  });
  return directors;
}

getAllDirectors(movies)


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {

  const stevenDrama = arr.filter((e) => {
  if(e.director === 'Steven Spielberg' && e.genre.includes('Drama')) return e
  });
  return stevenDrama.length
  
} 

howManyMovies(movies)

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

  function scoresAverage(data) {
    if(data.length === 0) return 0;
    const scores = data.map((num) => {
      if(!num.score) {
        num.score = 0
      }
      return num.score
  
    });
  
    const averageScore = scores.reduce((acc, val) => {
      return acc + val;
    })
    let average = (averageScore / scores.length);
    return Number(average.toFixed(2));
  }
  
  scoresAverage(movies)



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {

  dramaMovies = arr.filter((e) => e.genre.includes('Drama'));
    return scoresAverage(dramaMovies)

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
  //primero hacer un array con todas las pelicula fechas
  //aplicarles el sort
  
  function orderByYear(arr) {

    const moviesCopy = arr.map(film => film);
    moviesCopy.sort((a, b) => {
        if (a.year > b.year)
          return 1;
        if (a.year < b.year)
          return -1;
        if (a.title > b.title)
          return 1;
        if (a.title < b.title)
          return -1;
      });

    return moviesCopy 

  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    const titles = arr.map(film => film.title);
    titles.sort();
    return titles.slice(0,20);
   }


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
