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
    $(this).toggleClass('invisible');
});




$('#button').click(function(event){
    $("ul").each(function(i) {
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
// $('#1').click(function(event) {
// $(this).replaceWith($("#2"));
//
// });
//
$( "div.third" ).replaceWith( $( ".first" ) );
$('img').click(function(event) {
    $(this).parent().insertBefore($('#group'));

});