// console.log("Hello from external JavaScript");
//
// alert("welcome to my website!");
// var response= prompt("what is your favorite color?");
// alert("Awesome " + response + " is my favorite color too!");
//
//
//
//
//
// var bear= prompt( "How many days have you rented brother bear?");
//
// var mermaid= prompt( "How many days have you rented little mermaid");
//
// var hercules = prompt( "How many days have you rented Hercules? ");
//
// alert(" The total price for renting will be $" +(hercules*3 +mermaid*3 + bear*3));
//
//
// // var bear= Number(prompt(how many days renting));
// //
// // var total=(mermaid + hercule + bear)*3;
// //
// // alert("the total price is " + Total.tofixed(2));
//
//
//
//
// var googleHrs= prompt("How many hours have you worked at Google?");
//
// var facebookHrs= prompt("How many hours have you worked at Facebook?");
//
// var amazonHrs= prompt("How many hours have you worked at Amazon?");
//
// alert("The total amount you will be paid this week is " +(amazonHrs*380 + facebookHrs*350 +googleHrs*400));
//
//
// // var googleRate= 400;
// // var amazonRate= 380;
// // var fbRate=350;
//
// // var googleHours = Number(prompt("how many hours worked for google this week?"));
// // var facebookHours = Number(prompt("how many hours worked for google this week?"));
// // var amazonHours = Number(prompt("how many hours worked for google this week?"));
// //
// // alert("you earned$" + ((googlehrs * googleRate)+ (amazonRate*fbRate)+(amazonhrs * amazonRate)).tofixed(2));
//
//
//
//
// var studentTime= confirm( "Does the class time conflict with your schedule?");
//
//
// if (studentTime === true ) {
//     alert("you can not Enroll");
// }
// else {
//     var enrolled =prompt("How many students are enrolled?");
//
// if (enrolled >= 20) {
//     alert("you can not Enroll");
// }
// else
//     {
//         alert("You can enroll");
//     }
//
// }
//
// //
// // var classTime= prompt("what time is the class?");
// // var noScheduleConflict = !confirm("does the student have a class at " + classTime);
// //
// // var maxClassSize= Number(prompt("what is the maximum class size?"));
// //
// // var studentsEnrolled =Number(prompt("How many students are currently enrolled?"));
// //
// // alert("student can enroll in class:" + (noscheduleConflict && (studentsEnrolled < maxClassSize)));
//
//
//
//
//
// var  premiumMember = confirm( "Are you a Premium Member?");
//
// if (premiumMember ===true) {
//     var expired = confirm("Is the offered expired?");
//     if (expired === true) {
//         alert("Offer is not valid");
//     } else
//     {
//         alert("Offer is valid");
//     }
// }
// else {
//     var notPremium = Number(prompt("How many items do you have?"));
//
//     if (notPremium >= 2) {
//         var twoItems = alert("Offer is Valid");
//     } else
//         {
//         alert("offer is not valid");
//     }
//
// }
//

var noAfterSchoolconflict  = !confirm("is your current school program on thursday?");

alert("student can joing after school program "+ noAfterSchoolconflict);


// //
// // var premiumMember= confirm("Is the customer a premium Member?");
// // var numberItemsBought= Number(prompt("how many items did the customer buy?"));
// // var is OfferValid= confirm("is this coupon still good");
// //
// // alert("Customer coupon valid: "+ (isOfferValid &&( premiumMember || numberItemsBought >=2)));
//
//


