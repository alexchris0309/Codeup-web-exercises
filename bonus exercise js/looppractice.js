// var i =1
//
// while
// (i < 65536) {
//      i = i * 2;
//      console.log(i)
// }
//
// var allCones = Math.floor(Math.random() * 50) + 50;
//
// console.log( "I need to sell " + allCones + " today.")
//
//
// do{
//     var cusBuy = Math.floor(Math.random() * 5) + 1;
//     if (allCones >= cusBuy){
//         allCones = allCones -cusBuy;
//         console.log("Yes I can sell you " + cusBuy + " I have " + allCones + " cones left");
//     }
//     else {
//         console.log(" No I can not sell you " + cusBuy + " I have " + allCones + " cones left");
//     }
// }
//
// while ( allCones > 0);
// console.log( "Yay I sold all the cones!");

// for(var i = 1; i <=10; i ++){
//
//    var random= Math.floor(Math.random() * 180) + 20
//     if (random % 2 === 0){
//         console.log(random + " is a even number" );
//     }
//     else{
//         console.log(random + " is a odd number")
//     }
//
// }





function showMultiplication (num) {

    for (var i = 1; i <= 10; i++){
        var total= i * num
        console.log( num + " x " +i + " = " + total)

    }


}

console.log(showMultiplication (7))