function lettersChangeNumbers(input) {
    let sequences = input.split(' ');
    let sum = 0;

    const isLowerCase = (string) => /^[a-z]$/.test(string); 
    const isUpperCase = (string) => /^[A-Z]$/.test(string);
 
    for (let token of sequences) {
        let result = 0;
        let firstChar = token[0];
        let firstCharPosition = token.toLowerCase().charCodeAt(0) - 96;
        let lastChar = token[token.length - 1];
        let lastCharPosition = token.toLowerCase().charCodeAt(token.length - 1) - 96;
        let numberPart = Number(token.substring(1, token.length - 1));
 
        if (isUpperCase(firstChar)) {
            result = numberPart/firstCharPosition;
            sum += result;    
        }

        if (isLowerCase(firstChar)) {
            result = numberPart * firstCharPosition;
            sum += result;
        }

        if (isUpperCase(lastChar)) {
            sum -= lastCharPosition;
        }

        if (isLowerCase(lastChar)) {
            sum += lastCharPosition;
        }   
    }
    console.log(sum.toFixed(2));
}

lettersChangeNumbers('A12b s17G');
lettersChangeNumbers('P34562Z q2576f   H456z');
lettersChangeNumbers('a1A');