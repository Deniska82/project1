/*jshint esversion: 6 */
/* jslint node: true */
/* jshint browser: true */
"use strict";



const num = 50;

switch (num) {
   case 49:
      console.log('Неверно');
      break;
   case 100:
      console.log('Неверно');
      break;
   case 50:
      console.log('Верно');
      break;
   default:
      console.log('Не в этот раз!');
      break;
}