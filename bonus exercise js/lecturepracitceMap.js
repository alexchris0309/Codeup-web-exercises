"use strict";

const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genres: ["southern","gothic","coming of age"],
        yearsInPublication: 59
    },
    {
        title: "No Longer Human",
        author: "Osamu Dazai",
        genres: ["autobiography","short novel"],
        yearsInPublication: 71
    },
    {
        title: "1984",
        author: "George Orwell",
        genres: ["dystopian","sci-fi","political fiction"],
        yearsInPublication: 70
    },
    {
        title: "Noruwei no Mori",
        author: "Haruki Murakami",
        genres: ["coming of age", "novel"],
        yearsInPublication: 32
    }
];

/*
    MAP
    using .map, create an array that returns all author names.

    const bookAuthors = books.map(book =>{
    return book.author
    });
 */
/*
    FILTER
    using .filter, create an array that returns all books with at least 3 genres
 */
    const bookGenre= books.filter(book =>{
        return book.genres.length >=3

    });

console.log(bookGenre);

//
// want to get the book titles that have a genre of coming of age

// const comingOfAge=books.filter(book=>{
//    return book.genres.indexOf('coming of age')>=0.map(book=> book.title);
// });
// console.log(comingOfAge)


/*
    REDUCE
    using .reduce, return the total years between all books.
 */

//
// const salesPeople = [
//     {name: 'Jim Halpert', sales: 100},
//     {name: 'Dwight Schrute', sales: 50},
//     {name: 'Andy Bernard', sales: 150},
// ];

const totalYears = books.reduce((total, book) => {
    return total + book.yearsInPublication;
},0);

console.log(totalYear)


// notes on reduce

// .rduce(function(accumulation),current element, initialvalue) 0 is the initial value your are adding on to

//
// const longestName= books.reduce((previous,current)=> {
//     const currentName= current.author;
//     if(currentName.length > previous.length){
//         return currentName;
//     }else{
//         return previous;
//     }
// },"");