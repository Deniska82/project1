/*jshint esversion: 6 */
/* jslint node: true */
/* jshint browser: true */

'use strict';

function first() {
    // Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();


function learnJS(land, callback) {
    console.log(`Я учу: ${land}`);
    callback();
}

function done(){
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done);