function replaceRepeatingChars(letters) {
    let newString = '';
    let lastLetter = '';

    for (let letter of letters) {

        if (lastLetter != letter) {
            newString += letter
        }

        lastLetter = letter;
    }

    console.log(newString);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');