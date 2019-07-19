"use strict";




const fizzbuzz=(input)=>{
    for (let i = 1; i <= input; i++) {
        if (i % 15 === 0) {
            console.log("fizzbuzz ");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else {
            console.log(i);
        }
    }

}




console.log(fizzbuzz(50))





