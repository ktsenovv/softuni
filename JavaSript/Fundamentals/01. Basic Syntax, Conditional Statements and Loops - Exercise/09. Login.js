function login(input) {
    let username = input.shift();
    let password = username.split('').reverse().join('');
    let countFails = 0;
    
    while(true) {
        let passwordNext = input.shift();

        if(password === passwordNext) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            countFails++;

            if(countFails === 4) {
                console.log(`User ${username} blocked!`);
                break;
            }

            console.log('Incorrect password. Try again.');
        }
    }
}