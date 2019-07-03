var konami = '38,38,40,40,37,39,37,39,66,65,13';
var code=[];



$(document).keyup(function(element){
    code.push(element.keyCode);
    if (code.toString().indexOf(konami)>=0) {
        $('body').css("background-image",'url("pictures/konami.jpg")');
        alert("you have added 30 lives!");

    }
});

$(document).keyup(function(element){

    if(element.which===65) {
        $("#A").fadeOut(100).fadeIn(100);
    }

});

$(document).keyup(function(element){

    if(element.which===66) {
        $("#B").fadeOut(100).fadeIn(100);
    }

});

$(document).keyup(function(element){

    if(element.which===39) {
        $("#right").fadeOut(100).fadeIn(100);
    }

});


$(document).keyup(function(element){

    if(element.which===37) {
        $("#left").fadeOut(100).fadeIn(100);
    }

});

$(document).keyup(function(element){

    if(element.which===40) {
        $("#down").fadeOut(100).fadeIn(100);
    }

});


$(document).keyup(function(element){

    if(element.which===38) {
        $("#up").fadeOut(100).fadeIn(100);
    }

});