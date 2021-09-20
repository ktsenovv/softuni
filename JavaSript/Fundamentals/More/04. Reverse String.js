function reverseString(str) {
    let strArr = str.split('');
    let strReversed = strArr.reverse();
    strReversed = strReversed.join('');
    console.log(strReversed);
}

reverseString('Hello');