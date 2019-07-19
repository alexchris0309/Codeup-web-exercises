// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.


const wait=(number) =>{
    return new Promise((resolve) => {
        setTimeout(resolve, number);
    });
}


wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
//
//
//
//




function commits(username) {
    return fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization':`token ${githubkey}`}})
        .then (response=> response.json())
        .then ((data) => {
            // console.log(data)


            const userData = data.filter((gitStat) => {
                // console.log(gitStat);
                if (gitStat.type === "PushEvent") {
                    return gitStat
                }
            });

            console.log(userData[0].created_at)
        })
        .catch(error => console.error(error))

}

// commits("alexchris0309");

let username = prompt( "what user do you want to check?");
commits(username)