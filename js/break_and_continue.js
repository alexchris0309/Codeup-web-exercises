



var random = Math.floor(Math.random()*50)+1;
console.log("random number to skip is: " + random);

for(var i = 1; i < 50; i ++){
    if (i % 2 === 0){
        continue;
    }
    if (random === i) {
        console.log("yikes skipping " + i);
    }else{
        console.log("here is an odd number:" + i);
    }
}
