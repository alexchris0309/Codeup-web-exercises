// Add a class to all dd elements named invisible.
//
//     Create CSS that sets elements with the invisible class to visibility: hidden;.
//
// Update the page with jQuery to add a link that toggles the class invisible on and off for all dd elements.
//


$('dd').addClass( 'invisible' );





    $('#classtog').click(function(event) {
        event.preventDefault();
        $('dd').toggleClass('invisible');
    });

$('dt').click(function(event) {
    event.preventDefault();
    $(this).toggleClass('highlighted');
});




$('#button').click(function(event){
    $("ul").each(function() {
        $(this).children().last().css("background-color", "red");
    });

});




$('h3').click(function(event){

        $(this).next().slideToggle().css("font-weight", "bold");
    });


$('li').click(function(event){

    $(this).parent().children().first().css("color", "blue");
});

//


$('span').click(function(){
    $(this).parent().hide();

});

$('ul').hide();

// $('#hidden').hide();

// vanilla js method
// setTimeout(function(){
//     $('#hidden').fadeIn(500);
// }, 8000);

// jquery method

$('#hidden').hide().delay(8000).fadeIn(500);

//



//
// $('swap1').click(function(event) {
//     $('#frame1").parent().insertBefore($('#group'));
//
// });
//     var imgLeft = $("#1").attr("src");
//     var imgCenter = $("#2").attr("src");
//     var imgRight = $("#3").attr("src");


    $("#swap1").click(function () {
        var imgLeft = $("#1").attr("src");
        var imgCenter = $("#2").attr("src");


        $("#1").attr("src",imgCenter);
        $("#2").attr('src',imgLeft);
    });


    $("#swap3").click(function () {
        var imgCenter = $("#2").attr("src");
        var imgRight = $("#3").attr("src");

        $("#3").attr("src", imgCenter);
        $("#2").attr("src", imgRight);
    });


$("#swap2").click(function(){

    for(var i=2; i>=0; i--) {
        var imgLeft = $("#1").attr("src");
        var imgCenter = $("#2").attr("src");
        var imgRight = $("#3").attr("src");

        var randomNumber = Math.floor(Math.random() * i);

        if (randomNumber === 0) {
            $("#2").attr("src", imgLeft);
            $("#1").attr("src", imgCenter)
        } else {
            $("#2").attr("src", imgRight);
            $("#3").attr("src", imgCenter)
        }
    }
});