
// var mix= ["fred",true,5,3]
//
//
// var filterNumbers= function(array){
//     var arr= [];
//     array.forEach(function(num){
//         if (typeof num === "number"){
//              arr.push(num) ;
//
//
//         }
//     });
//     return arr.sort();
//
// }
//
//
// var ARRRR =filterNumbers(mix);
// console.log(ARRRR);
//


var getOlder= function(objects) {
    objects.forEach(function (element) {
        element.age += 1;

    });
    return  objects;
}


 var dogs=   [
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
        {
            name: "Freddy",
            breed: "Lab",
            age: 4
        },
        {
            name: "Mr. Pig",
            breed: "Mastif",
            age: 10
        }
    ]

console.log(getOlder(dogs))