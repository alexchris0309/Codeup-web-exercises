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

