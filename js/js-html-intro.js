"use strict";



console.log("hello from external js!");
var bill ="bill";
console.log(bill);

 // alert
alert("Please turn off your ad blocker.");

// confirm
// depending on what user inputs returns true or false

confirm("Are you at least 19 years old?");


// prompt if user inputs empty it will still output a string "string" in the console

prompt("what is your quest?");

alert("you must be a codeup student to continue viewing this page.");
confirm("Are you a codeup student?");
prompt("what cohort were you in?");


// ?   function
//

// does not return string
// funtion sayHello()
// {
//     console.log("hello World");
// }




//Funciton Declaration
// function say Hello(){
//     return "Hello World";
// }
//
// sayHello();

//assign variable so it comes on the console or add a console.log
// var greeting=sayHello();
// or
// console.log( sayHello());

Function XPathExpression
//
// IIFE wrappin gcode in this so it doesn't show on the global scope' +
// '' +
// (function () {
//
// })();



use functions to manipulate strings
//
// "use strict";
// // ask user for password
// var password =prompt("please enter your password");
// function hidePasword(pass){
//     var fullPassword=pass.substring(0,pass.length);
//     console.log(fullPassword)
//
// }
//
// your password is ""
//
//
// function hidePassword(pass){
//     var fullPassword = pass.substring (0,pass.length);
//
//     var hiddenPassword = pass.repalce(fullPassword,"_");
//     return "your password is:" + hiddenPassword;
// }
//
// console.log(hidePassword(pass));