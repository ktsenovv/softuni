function charactersInRange(strOne, strTwo) {
    let min = strOne.charCodeAt(0);
    let max = strTwo.charCodeAt(0);

    let strOneAsNumber = strOne.charCodeAt(0);
    let strTwoAsNumber = strTwo.charCodeAt(0);

    if(strOneAsNumber > strTwoAsNumber) {
        min = strTwo.charCodeAt(0);
        max = strOne.charCodeAt(0);
    }

    let result = '';
    for (let i = min + 1; i < max; i++) {
        let character = String.fromCharCode(i);
        result += character + ' ';
    }

    return result;
}

let result = charactersInRange('C', '#')
console.log(result);