const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//
//
// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const atleastthree= users.filter(user=>{
    return user.languages.length >=3

    });

console.log(atleastthree)

//     Use .map to create an array of strings where each element is a user's email address

const userEmail= users.map(user=>{
    return user.email

    });

console.log(userEmail)

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const yearAvg= users.reduce((total,year)=>{
    const result= year.yearsOfExperience
    return  result+total

},0);

console.log(yearAvg/users.length)


//     Use .reduce to get the longest email from the list of users.

const longestEmail= users.reduce((previous,current)=> {
    const currentEmail= current.email;
    if(currentEmail.length > previous.length){
             return currentEmail;
         }else{
             return previous;
         }
     },"");

console.log(longestEmail)

//     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

// const  names= users.map(user=>{
//      return user.name
//
// });
//     console.log(names)

const userNames= users.reduce((total,user,index,array)=>{
    if(index === (array.length-1)){
        return total + `${user.name}.`
    }else {
        return total + `${user.name}, `
    }

},"Your instructors are: ");


console.log(userNames);
//
// Bonus
// Use .reduce to get the unique list of languages from the list of users.


const uniqueLanguages= users.reduce((prev,current)=>{
    const langs= current.languages;
    for(const lang of langs){
        prev.add(lang);
    }
    return prev;
},new Set);

console.log(uniqueLanguages)



