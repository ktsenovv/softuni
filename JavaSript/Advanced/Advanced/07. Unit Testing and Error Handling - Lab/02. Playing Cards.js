function playingCards(face, suit) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };

    if (faces.includes(face) == false) {
        throw Error('Invalid face: ' + face);
    }

    if (Object.keys(suits).includes(suit) == false) {
        throw Error('Invalid suit: ' + suit);
    }

    return {
        face,
        suit: suits[suit],
        toString() {
            return this.face + this.suit;
        }
    };
}

const card1 = playingCards('A', 'S');
console.log(card1.toString());

const card2 = playingCards('10', 'H');
console.log(card2.toString());

const card3 = playingCards('1', 'C');
console.log(card3.toString());

const card4 = playingCards('7', 'X');
console.log(card4.toString());