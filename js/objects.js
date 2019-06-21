(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Alex",
        lastName: "Contreras",
        greeting: function sayHello() {
            console.log("Hello from Alex Contreras");

        }


    };

    console.log(person.greeting())

    console.log(person.firstName)


    // person.sayHello= function(){
    //     console.log("hell from Alex Contreras");}

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    function needtoPay(amount) {
        if (Number(amount < 200)) {
            return "You do not get a discount. Your total is " + (amount).toFixed(2)
        } else {
            return "Your total amount after discount is $" + (amount * .88).toFixed(2) +
                " Your total amount before discount was $" + amount + " You Saved $ " + (amount * .12).toFixed(2)
        }

    }


    var shoppers = [
        {
            name: 'Cameron',
            amount: needtoPay(180)
        },
        {
            name: 'Ryan',
            amount: needtoPay(250)
        },
        {
            name: 'George',
            amount: needtoPay(320)
        }
    ];


    shoppers.forEach(function (shop, i) {
        console.log(shoppers[i].name);
        console.log(shoppers[i].amount);
    });


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: "Euphoria",
            author: {
                firstName: "Jeon",
                lastName: "Jungkook"

            }
        },

        {
            title: "Awake",
            author: {
                firstName: "Jin",
                lastName: "Kim"

            }

        },

        {
            title: "Red",
            author: {
                firstName: "Jackson",
                lastName: "Wang"
            }

        },

        {
            title: "Give me a Chance",
            author: {
                firstName: "Lay",
                lastName: "Yixing"
            }
        },

        {
            title: "7th  Sense",
            author: {
                firstName: "NCT",
                lastName: "U"
            }

        }
    ];


    console.log(books[0].author.firstName)
    console.log(books[0].author.lastName)
    console.log(books[0].title)
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */


    books.forEach(function (book, i) {
        console.log("Book # " + (i + 1))
        console.log("Book Title: " + books[i].title)
        console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName)

    });


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

// //     function createBook(t, firstName, lastName){
//     var ={};
//     book.title = title;
//     book.author = {};
//     book.author.firstName = firstName;
//     book.author.lastName = lastName;
//     return book;
// }
//
// books.push(createBook("how to draw Manga", firtname "Katy, lastName "coope"));"





})();