/*jshint esversion: 6 */
/* jslint node: true */
/* jshint browser: true */
"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');

const personalMovieDB  = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false 
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько его отцените?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько его отцените?', '');

personalMovieDB.movies[a] = b;      
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);