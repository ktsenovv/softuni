function hardWords(input) {
    let text = input.shift();
    let words = input.shift();
    
    lastCh = '';
    chCounter = 0;

    for (let ch of text) {
        if (ch == '_') {
            chCounter++;
        } else {
            if (lastCh == '_') {
                for (let word of words) {
                    if (word.length == chCounter) {
                        let match = '_'.repeat(word.length);
                        text = text.replace(match, word);
                    }
                }
            }
            chCounter = 0;
        }

        lastCh = ch;
    }
    
    console.log(text);
}

hardWords(
    ['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);