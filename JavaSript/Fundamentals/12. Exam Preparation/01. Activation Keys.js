function activationKeys(input) {
    const actions = {
        'Contains': contain,
        'Flip': flip,
        'Slice': slice
    };

    let actkey = input.shift();
    
    while (input[0] != 'Generate') {
        tokens = input.shift().split('>>>');
        let action = actions[tokens[0]];
        action(tokens[1], tokens[2], tokens[3]);
    }

    console.log(`Your activation key is: ${actkey}`);

    function contain(str) {
        if (actkey.includes(str)) {
            console.log(`${actkey} contains ${str}`);
        } else {
            console.log('Substring not found!');
        }
    }

    function flip(strCase, indexOne, indexTwo) {
        indexOne = Number(indexOne);
        indexTwo = Number(indexTwo);

        let first = actkey.substring(0, indexOne);
        let second = '';

        if (strCase == 'Upper') {
            second = actkey.substring(indexOne, indexTwo).toUpperCase();
        } else if (strCase == 'Lower') {
            second = actkey.substring(indexOne, indexTwo).toLowerCase();
        }
        
        let third = actkey.substring(indexTwo, actkey.length);

        actkey = first + second + third;

        console.log(actkey);
    }

    function slice(indexOne, indexTwo) {
        indexOne = Number(indexOne);
        indexTwo = Number(indexTwo);

        let first = actkey.substring(0, indexOne);
        let second = actkey.substring(indexTwo, actkey.length);

        actkey = first + second;

        console.log(actkey);
    }
}

activationKeys([
    "abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"
]);

console.log();

activationKeys([
    "134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"
]);