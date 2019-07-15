

   $(document).ready(function () {

       alert("DOM has finished loading");
   });

var contents= $('#fancy-header').html();
alert(contents);

alert($('#fancy-header').html());

var contain=$('#container').html();
alert(contain);

var border = $('.codeup').css('border','1px solid #F00');

$('li').css('font-size','20px');
$('h1,p,li').css('background-color','hotpink');
var contents= $('h1').html();
alert(contents);

// $('h1').css('back-color','hotpink');

$('#fancy-header').click(function() {
    $(this).css('background-color','hotpink');
});

$('p').dblclick(function() {
    $('p').css('font-size','18px');
});
//
// $('li').hover(handlerIn,handlerOut)(function() {
//     $('li').css('color','red');
// });
//
// $('li').hover(
//     function() {
//         $(this).css('color', 'red');
//     },
//     function() {
//         $(this).css('color', 'black');
//     }
// );
//
//
// $('.codeup').css('border', '1px solid red');
//
// var contents=$('#codeup').html();
//
// alert(contents);
//
// $('li').css('font-size','20px');
//
// $('h1,p,li').css('background-color','pink');

