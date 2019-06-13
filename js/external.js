console.log("Hello from external JavaScript");

alert("welcome to my website!");
var response= prompt("what is your favorite color?");
alert("Awesome " + response + " is my favorite color too!");


var movieDayAmt= prompt( "How many days have you rented a movie?");
alert(" The total price for renting will be $" +movieDayAmt*3);

var googleHrs= prompt("How many hours have you worked at Google?");

var facebookHrs= prompt("How many hours have you worked at Facebook?");

var amazonHrs= prompt("How many hours have you worked at Amazon?");

alert("The total amount you will be paid this week is " +(amazonHrs*380 + facebookHrs*350 +googleHrs*400));




var studentTime= confirm( "Does the class time conflict with your schedule?");


if (studentTime === true ) {
    alert("you can not Enroll");
}
else {
    var enrolled =prompt("How many students are enrolled?");

if (enrolled >= 20) {
    alert("you can not Enroll");
}
else
    {
        alert("You can enroll");
    }

}

var  premiumMember = confirm( "Are you a Premium Member?");

if (premiumMember ===true) {
    var expired=confirm("Is the offered expired?");
}
else {
    var notPremium = prompt("How many items do you have?");

    if (notPremium >= 2) {
        var expired;
    } else {
        alert("offer is not valid");
    }

    if (expired === true) {
        alert("Offer is not valid");
    } else {
        alert("offer is valid");
    }
}

