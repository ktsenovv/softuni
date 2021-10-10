function mirrorWords(input) {
    let words = [];
    let validWords = 0;

    let pattern = /(#|@)(?<wordOne>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/g;

    let match = pattern.exec(input);

    while (match != null) {
        let firstWord = match.groups.wordOne;
        let secondWord = match.groups.wordTwo;

        let wordReversed = secondWord.split('').reverse().join('');

        if (firstWord === wordReversed) {
            words.push(firstWord + ' <=> ' + secondWord);
        }

        validWords++;
        
        match = pattern.exec(input);
    }

    if (validWords > 0) {
        console.log(`${validWords} word pairs found!`);
    } else {
        console.log('No word pairs found!');
    }

    if (words.length == 0) {
        console.log('No mirror words!');
    } else {
        console.log('The mirror words are:');
        console.log(words.join(', '));
    }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);

console.log();

mirrorWords([
    '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'
]);

console.log();

mirrorWords([
    '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'
]);