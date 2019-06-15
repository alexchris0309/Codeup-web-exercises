// "use strict";
//
//
//
// console.log("hello from external js!");
// var bill ="bill";
// console.log(bill);
//
//  // alert
// alert("Please turn off your ad blocker.");
//
// // confirm
// // depending on what user inputs returns true or false
//
// confirm("Are you at least 19 years old?");
//
//
// // prompt if user inputs empty it will still output a string "string" in the console
//
// prompt("what is your quest?");
//
// alert("you must be a codeup student to continue viewing this page.");
// confirm("Are you a codeup student?");
// prompt("what cohort were you in?");


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




//
// conditionals
//
// function isItANumber(parameter){
//     if(isNaN(parameter)===false) {
//         return "thats a number!"
//     }else{
//         return"that's not a number"
//     }
// }
//
//
// if/eles/if/else
//
//
//     if(condition1){
//         run this code;
//     } else if (condition2) {
//         since the first condition wasn't met and the second was i fun';
//     } else if ()
//
//
//
//         var haveCow=false;
//         var haveGoat=True;
//
//         if(haveCow){
//             console.log "milking betty"
//         } else if (haveGoat){
//             console.log "Milking Billy Sue";
//         }else {
//             console.log("Going to Albertsons");
//         }
//
//
//
//         function isThisThirtyFive(parameter){
//
//             if(parameter > 35){
//                 return "the number" + paramater + "is greater than 35";
//             } else if (paramter<35)
//                 return "the nubmer " + parameter + "is less than 35".;
//         } else if (parameter ===35) {
//     return "that is 35!";
// } else{
//             return thats not a number
// }
// }



//
// Ternary operatior (use it with caution)
//
// left hand side of " : " is true right side is False
//
// var message =(booleanValue)? "operation was true." :"operation was false.";
//
//
// var doWehaveMilk= false;
//
//
// var action  =(doWehaveMilk)? "lets make some Honey Nut Cheerios!" : "Going to Giant Eagle.";
//
// colsole.log(action);



// Switch cases
//
// statement with multiople conditions that will trigger based on the value of a variable
//
//var color=prompt("what is your favorite clor?").toLowerCase();



// switch(color) {
//     case "green":
//         alert("what a coincidence, thats my favorite!!");
//         break;
//     case "orange":
//         alert("thats my brothers favorite color!");
//         break;
//     default:
//         alert(color + " is  a weird color, my dude.");
//         break;
// }


//
// var animal= "n/a";
//
// switch(animal) {
//     case "cow":
//         console.log("Milking betty lynn");
//         break;
//     case "goat":
//         console.log("Milking Bertha");
//         break;
//     case "camel":
//         console.log("milking ophelia");
//         break;
//     default:
//         console.log("going to the store");
//         break;
// }
//
//
// var meat= prompt("what is your favorite sandwich meat?");
//
// switch(lunchMeat) {
//     case "olive loaf":
//         alert("Bold choice");
//         break;
//         case "brisket":
//             alert("thank you for choosing correctly");
//             break;
//             default:
//             alert("Meh");
//             break;
// }
//
