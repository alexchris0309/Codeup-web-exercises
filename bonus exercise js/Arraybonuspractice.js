
var mix= ["fred",true,5,3]


var filterNumbers= function(array){
    var arr= array;
    arr.forEach(function(num,i){
        if (!isNaN(Number(num))){
            var hello= arr.push(num) ;
            console.log (hello);


        }
    });

}




var mix = [“fred”, true, 5, 3];
console.log(mix);
var filtered = mix.filter(function(item) {
    return typeof item === “number”;
});
console.log(filtered);
})();


console.log (filterNumbers(mix));