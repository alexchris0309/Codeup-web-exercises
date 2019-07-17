"use strict;"



//
var i = 1;

while (i< 65536){
i = i * 2

    console.log( i)
}



//
// var allCones = (Math.floor(Math.random() * 50) + 50);
// console.log("starting the day with "+ allCones + " cones");
// do {
//
//     var conesWanted = Math.floor((Math.random() * 5) + 1);
//     if (conesWanted <= allCones) {
//         allCones -= conesWanted;
//         console.log(conesWanted + "cones sold..");
//     } else {
//         console.log("cann ot see you  " + conesWanted + " cones I only have " + allcones + "....");
//
//     }
// } while (allCones>0);
// console.log("yay, I sold them all!");




 var allCones = Math.floor(Math.random() * 50) + 50;

 console.log( "I need to sell " + allCones + " today.")


 do{
     var cusBuy = Math.floor(Math.random() * 5) + 1;
     if (allCones >= cusBuy){
         allCones = allCones -cusBuy;
         console.log("Yes I can sell you " + cusBuy + " I have " + allCones + " cones left");
     }
     else {
         console.log(" No I can not sell you " + cusBuy + " I have " + allCones + " cones left");
     }
 }

 while ( allCones > 0);
 console.log( "Yay I sold all the cones!")