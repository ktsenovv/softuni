function loadingBar(percent) {
    let result = '[';
    let divided = percent / 10;

    for (let i = 1; i <= divided; i++) {
        result += '%';
    }

    for (let i = divided; i < 10; i++) {
        result += '.';
    }

    result += ']';

    if (percent !== 100) {
        console.log(`${percent}% ${result}`);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log(`${result}`);
    }
}

loadingBar(50);