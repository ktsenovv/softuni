function amazingNumbers(num) {
    numm = num.toString();
    let sum = 0;

    for(let i = 0; i < numm.length; i++) {
        sum += Number(numm[i]);
    }

    let result = sum.toString().includes('9');
    console.log(result ? `${numm} Amazing? True` : `${numm} Amazing? False`);
}