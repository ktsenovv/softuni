function passwordReset(input) {
    const actions = {
        'TakeOdd': odd,
        'Cut': cut,
        'Substitute': sub
    };

    let password = input.shift();

    while (input[0] != 'Done') {
        let tokens = input.shift().split(' ');
        let action = actions[tokens[0]];
        action(tokens[1], tokens[2]);
    }

    console.log('Your password is: ' + password);

    function odd() {
        let newPass = '';
        for (let i = 0; i < password.length; i++) {
            if (i % 2 !== 0) {
                newPass += password[i];
            }
        }
        password = newPass;
        console.log(password);
    }

    function cut(index, numChars) {
        index = Number(index);
        numChars = Number(numChars);

        let left = password.substring(0, index);
        let right = password.substring(index + numChars, password.length);

        password = left + right;

        console.log(password);
    }

    function sub(char, charNew) {
        if (password.includes(char)) {
            password = password.split(char).join(charNew);
            
            console.log(password);
        } else {
            console.log('Nothing to replace!');
        }
    }
}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"]);

console.log();

passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"]);