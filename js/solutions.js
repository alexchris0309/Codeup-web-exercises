"use strict";

/**
 * Write your solutions here.

 SIMPLIFY IS THE BEST PHILOSOPHY
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue*/

function isTrue(input) {
    return (input === true)
}

/* isFalse*/
function isFalse(input) {
    return (input === false)
}


/* not*/
function not(boo) {
    return !boo;
}

/* addOne*/

function addOne(num) {
    if (isNaN(num) === false){
        return (Number(num) + 1);
    }
}

// function addOne(num){
//     return Number(num) + 1;
// }


/* isEven*/
function isEven(even) {
    return ((Number(even) % 2 === 0) ? true : false);
}

// function isEven(num){
//  if (type of  num === "boolean"){
//      num = NaN;
// }
// return Number (num) % 2 === 0;
// }


/* isIdentical */
function isIdentical(a,b) {
    if (a === b){
        return true;
    } else {
        return false;
    }
}
/* isEqual*/
function isEqual(c,d) {
    if (c == d) {
        return true;
    } else {
        return false;
    }
}
/* or*/
function or(e,f) {
    return (e || f);
}
/* and*/
function and(g,h) {
    return (g && h);
}
/* concat
*/

function concat(a, b){
    return String(a) + String(b);
}
//
// concat
// function concat (p1, p2){
//     return "" + p1 + p2;
// }

// or
//  function concat(p1,p2){
//     return p1.toString() + p2.toString();
//  }


