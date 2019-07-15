//
// // Dom Events
// // When a user hits the "g" key, the background of the page should turn purple.
// var bg = document.getElementsByTagName('body')[0];
//
// var backgroundColor = function (event) {
//     if(event.keyCode === 71) {
//
//         bg.style['background-color'] = 'purple';
//     }
// }
//
//
// window.addEventListener('keyup', backgroundColor);
//
//
// //     Every time the enter key is pressed, increment and display a counter that shows the total number of times the enter key has been pressed.
//
//
//
// var bucket=[]
//
// var count=function(key){
//     if(key.which===13){
//        var result= bucket.push(key)
//     }
// console.log("enter key has been pressed "+ bucket.length +' times.');
// }
//
// document.addEventListener('keyup',count);
//
//
// //     When someone types 1, 2, 3 in a row, show an alert that says "You get a 50% discount!".
//
// var alertCode = '49,50,51';
// var code=[];
//
//
//
// $(document).keyup(function(element){
//     code.push(element.keyCode);
//     if (code.toString().indexOf(alertCode)>=0) {
//         alert("you get a 50% discount");
//
//     }
// });
//
// console.log(code)



//
// var detonationTimer = 5;
// interval=1000;
//
// // TODO: This function needs to be called once every second
// intervalId= setInterval(
// function updateTimer() {
//     if (detonationTimer == 0) {
//         alert('EXTERMINATE!');
//         document.body.innerHTML = '';
//     } else if (detonationTimer > 0) {
//         document.getElementById('timer').innerHTML = detonationTimer;
//     }
//
//     detonationTimer--;
// },interval);
//
//
// // TODO: When this function runs, it needs to
// // cancel the interval/timeout for updateTimer()
// function defuseTheBOM() {
//     clearInterval(intervalId)
//
// }





// Don't modify anything below this line!
//
// This causes the defuseTheBOM() function to be called
// when the "defuser" button is clicked.
// We will learn about events in the DOM lessons
// var defuser = document.getElementById('defuser');
// defuser.addEventListener('click', defuseTheBOM);


// TODO: Uncomment next line and get the main header element by id
var mainHeader = document.getElementById('main-header');

// TODO: Set inner html of mainHeader to "JavaScript is Cool"


var button1=document.getElementById('1');
button1.addEventListener('click',function()
{
    mainHeader.innerHTML = 'JavaScript is Cool';
});

// TODO: Uncomment the next line and get the sub header element by id
var subHeader = document.getElementById('sub-header');

// TODO: Set the text color of subHeader to blue
var button2= document.getElementById('2');
button2.addEventListener('click',function() {
    subHeader.style.color = 'blue';
});
// TODO: Uncomment the next line and get all list items
var listItems = document.getElementsByTagName('li') ;

// TODO: Set text color on every other list item to grey

var button3= document.getElementById('3');

button3.addEventListener('click',function() {
    for (var i = 0; i < listItems.length; i++) {
        if (i % 2 === 0) {
            listItems[i].style.color = 'grey' ;
        }
    }

});
// TODO: Set text color of li with dbid = 1 to blue


for (var i = 0; i < listItems.length; i++) {
    var dbid = listItems[i].getAttribute("data-dbid");
    console.log(dbid)

}
var liBlue=function(){listItems[0].style.color='blue'};

button3.addEventListener('click',liBlue);


// Prints
// TODO: Uncomment the next line and get all elements with class name sub-paragraph
var subParagraphs = document.getElementsByClassName('sub-paragraph') ;

// TODO: Change the text in the first sub paragraph to "Mission Accomplished!"
var changeText=function(){subParagraphs[0].innerHTML='Mission Accomplished!'};

var button4= document.getElementById('4');

button4.addEventListener('click',changeText);


$(document).ready(function() {
    alert( 'The DOM has finished loading!' );
});