function sumDigits(num) {
    num = num.toString();
    sum = 0;

    for(let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }

    console.log(sum);
}