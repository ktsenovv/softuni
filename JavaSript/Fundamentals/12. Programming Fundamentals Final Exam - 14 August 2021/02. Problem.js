// Regexp

function solve(input) {
    let pattern = /!([A-Z][a-z]{3,})!:\[([A-Za-z]{8,})]/g;

    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let match = pattern.exec(input[i]);

        if (match != null) {
            console.log(`${match[1]}: ${match[2].split('').map(a => a.charCodeAt(a)).join(' ')}`);
        } else {
            console.log('The message is invalid');
        }
    }
}

solve(["2",
"!Send!:[IvanisHere]",
"*Time@:[Itis5amAlready"]);

console.log();

solve(["3",
"go:[outside]",
"!drive!:YourCarToACarWash",
"!Watch!:[LordofTheRings]"]);

// !([A-Z][a-z]{3,})!:\[([A-Za-z]{8,})]