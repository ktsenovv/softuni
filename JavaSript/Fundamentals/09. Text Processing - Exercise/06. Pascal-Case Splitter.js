/*function pascalCaseSplitter(text) {
    let result = [];
    let currentWord = '';

    let lowerText = text.toLocaleLowerCase();

    for (let i = 0; i < text.length; i++) {
        if (text[i] != lowerText[i]) {
            if (currentWord.length > 0) {
                result.push(currentWord);
            }
            currentWord = text[i];
        } else {
            currentWord += text[i];
        }
    }

    if (currentWord.length > 0) {
        result.push(currentWord);
    }

    console.log(result.join(', '));
}*/

function pascalCaseSplitter(text) {
    let result = text[0];

    let lowerText = text.toLocaleLowerCase();

    for (let i = 1; i < text.length; i++) {
        if (text[i] != lowerText[i]) {
            result += ', ';
        }
        result += text[i];
    }

    console.log(result);
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');