// Associative Arrays

function solve(input) {
    let followers = {};

    let actions = {
        'New follower': newFollower,
        'Like': like,
        'Comment': comment,
        'Blocked': blocked
    };

    while(input[0] != 'Log out') {
        let tokens = input.shift().split(': ');
        let command = tokens[0];
        let action = actions[command];
        action(tokens[1], tokens[2], tokens[3]);
    }

    sorted = Object.entries(followers).sort((a, b) => { 
        likesCommentsA = a[1].likes + a[1].comments;
        likesCommentsB = b[1].likes + b[1].comments;
        return (likesCommentsB - likesCommentsA) || (a[0].localeCompare(b[0]));
    });
    
    console.log(`${Object.keys(followers).length} followers`);
    for (let [followerName, follower] of sorted) {
        console.log(`${followerName}: ${follower.likes + follower.comments}`);
    }

    function newFollower(username) {
        if (!followers[username]) {
            followers[username] = {
                likes: 0,
                comments: 0
            };
        }
    }

    function like(username, count) {
        count = Number(count);

        if (!followers[username]) {
            followers[username] = {
                likes: count,
                comments: 0
            }
        } else {
            followers[username].likes += count;
        }
    }

    function comment(username) {
        if (!followers[username]) {
            followers[username] = {
                likes: 0,
                comments: 1
            };
        } else {
            followers[username].comments += 1;
        }
    }

    function blocked(username) {
        if (followers[username]) {
            delete followers[username];
        } else {
            console.log(`${username} doesn't exist.`);
        }
    }
}

solve([
    "New follower: George",
    "Like: George: 5",
    "New follower: George",
    "Log out"
]);

console.log();

solve([
    "Like: Katy: 3",
    "Comment: Katy",
    "New follower: Bob",
    "Blocked: Bob",
    "New follower: Amy",
    "Like: Amy: 4",
    "Log out"
]);

console.log();

solve([
    "Blocked: Amy",
    "Comment: Amy",
    "New follower: Amy",
    "Like: Tom: 5",
    "Like: Ellie: 5",
    "Log out"
]);