

 showMultiplicationTable= function(num){
    for (var i =1; i <=10;i++){
    console.log(num + " x " + i + " = " +(i * num));
}

showMultiplicationTable(7)



// is odd/even

for ( var i = 0; i <=10; i ++){
    var ran = Math.floor(Math.random() * 180) + 20;
    if (ran % 2 === 0){
        console.log(ran + " is even!")
}else{
        console.log( ran + " is odd!");
    }
}




var christmasTree= function(){
    for (var outer = 1; outer <= 9; outer ++){
    var output="";
    for (var inner=1;inner<=outer;inner ++){
        output += outer;
        }
    console.log(output)
    }

console.log(christmasTree())


for (i = 100; i >= 5; i = i - 5){
    console.log(i);}

