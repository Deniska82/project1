/*jshint esversion: 6 */
/* jslint node: true */
/* jshint browser: true */
"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
} 
showFirstMessage("Hello world!");
console.log(num);



function ret() {
    let num = 50;

    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
     console.log("Hello");
};

logger();

const calc = (a, b) => {
    console.log('1');
    return a + b;
};

