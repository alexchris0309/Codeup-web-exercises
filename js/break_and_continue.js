




// var random = Math.floor(Math.random()*50)+1;
// console.log("random number to skip is: " + random);
//
// var choose=(prompt("Choose a odd number between 1-50"));
// // (console.log("The number to skip: " + choose));
//
//
// while(choose %2 === 0) {
//     alert("Please pick a odd number");
//     var choose = (prompt("Choose a odd number between 1-50"));
//     if (choose %2 !==0)
//     (console.log("The number to skip: " + choose));
//     {break;}
// }
//
// for(var i = 1; i < 50; i +=2){
//     if (choose === i) {
//         console.log("yikes skipping " + i);
//     }else{
//         console.log("here is an odd number:" + i);
//     }
// }

    do {
        var numberPicked = Number(prompt("pick an odd number between 1 and 50"));
        if (numberPicked % 2 === 0)
            alert("that is not odd try again");
        else if (numberPicked < 1 || numberPicked > 50)
            alert(" that number is not between 1 and 50");
        else if (typeof Number(numberPicked) != "number")
            alert(isNaN(numberPicked ));
        else {
            alert("congrats you picked the right number");
            break;
        }
    } while (true);


    var yikes = function(num) {
        for (var i = 1 ; i < 50; i += 2) {
            if (i === num) {
                console.log(" Yikes skipping the number: " + i);
                continue;
            }
            console.log("here is an odd number; " + i);
        }
    };

    yikes(numberPicked);






