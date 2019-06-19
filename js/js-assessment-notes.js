"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

function isBoolean(boo) {

    if(typeof(boo) === "boolean"){
        return true;}
    else {return false}
}

// function isBoolean(i){
//     return typeof input === "boolean"
// }




function isNumeric(num){
    if(isNaN(num)=== false){
        return true;
    }
    else{
        return false;}
}
//
// function isNumeric(num){
//     if(isBoolean(num)===true || input === null){
//         input = NaN;}
//         return !isNaN(num);
//     }
// }





function isString(a){
    if (typeof(a) === "string"){
        return true;
    }else{
        return false}
}
//
// function isString(a){
//     return typeof(a)=== "string"
// }


function isArray(a){
    if (Array(a)=== true){
        return true;
    }
    else {
        return false;
    }
}

// function isArray(input){
//     return Array.isArray(input)
// }



function isNegative(neg){
    if (neg < 0) {
        return true;
    }
    else {
        return false;}
}
//
// function isNegative(input){
//     return Number(input)<0;
// }


function isPositive(pos){
    if(Number(pos) > 0){
        return true;
    }
    else{return false;}
}
//
// function isPositive(input){
//     return parseInt( num) > 0;
// }



function decrement(dec){
    if (isNaN(dec)===false){
        return Number(dec) - 1;
    }
    else {
        return false;
    }
}

function increment(num) {
//     if (isNumeric(num)===false){
//         return false;
//     } else{
//         return num - 1;
//     }
// }


    function square(q) {
        if (isNaN(q) === false) {
            return q * q;
        } else {
            return false;
        }
    }


// function square(num){
// if (!isNumeric(num)){
// return false;}
// } else {
// return num * num}
// }
//
// or return  Math.pow(num, 2);


    function upperCase(u) {
        if (typeof (u) === "string") {
            return (u).toUpperCase;
        } else {
            return false;
        }
    }

    // function upperCase(u){
    //  if(isString(u)&& isNaN(u) || string ==='"'){
    //  return string.toUpperCase();}
    //  else{return false;}
    // }


    function increment(inc) {
        if (isNaN(inc) === false) {
            return Number(inc) + 1;
        } else {
            return false;
        }
    }

// function increment(num){
//     if (isNumeric(num)===false){
//         return false;
//     } else{
//         return num + 1;
//     }
// }


    function isPalindrome(a) {
        if (isNaN(a) === true) {
            return false;
        } else if (isPalindrom(a) === true) {
            return true;
        } else {
            return false;
        }
    }

// function isPalindrome(input){
//     if (typeof input == "string"){
//         var inputNew = input.toLowerCase();
//         inputNew = inputNew.split("");
//         inputNew = inputNew.reverse();
//         inputNew = inputNew.join("");
//         return inputNew === input.toLowerCase();
//     }else{
//         return fale;
//     }
// }


// function isPalindrome(input){
//     return typeof(input==="string") && input.tolowercase().split("").reverse()join("")===input.toLowerCase();
// }


    function getHighestNumber(a, b, c) {
        if ((isNaN(a) === false) && (isNaN(b) === false) && (isNaN(c) === false)) {
            return Math.max(a, b, c);
        } else {
            return false;
        }
    }

//
// function getHighestNumber(a,b,c{
// if(isNumberic(a)&& isNumberic(b) && isNumeric(c)) {
//     return Math.max(a, b, c);
// }
// else {
// return false;}
// }


    function add(a, b) {
        if ((isNaN(a) === false) && (isNaN(b) === false)) {
            return a + b;
        } else {
            return false;
        }
    }

//     function add(a,b){
//     if (isNumeric(a) && isNumeric(c)){
//     return parseFloat(a) + parseFloat(b);}
//     else {
//     return false;
//     }
// }

    function multiply(a, b) {
        if ((isNaN(a) === false) && (isNaN(b) === false)) {
            return a * b;
        } else {
            return false;
        }

    }

    /     function add(a,b){
//     if (isNumeric(a) && isNumeric(c)){
//     return parseFloat(a) * parseFloat(b);}
//     else {
//     return false;
//     }
// }


    function sumOfSquares(a, b) {
        if ((isNaN(a) === false) && (isNaN(b) === false)) {
            return Math.sqrt(a) + Math.sqrt(b);
        } else {
            return false;
        }
    }

    function sumOfSquares(a,b){
        return add((square(a),square(b));
    }





    function containsVowel(a) {
        if (typeof (a) === "string") {
            return true;
        } else {
            return false;
        }
    }


//     function containsVowel(string) {
//         if (isString(string)) {
//             string = string.toLowerCase();
//             if (string.indexOf('a')>=0 || string.indexOf('e')>=0 || string.indexOf('i')>=0|| stirng.indexOf('o') >=0 || string.indexOf.('u')>=0)
//             {
//                 return true
//             }
//         }
//     }
//
//     return false;
// }
