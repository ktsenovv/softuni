function equalSumsEvenOddPosition(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let linex = '';
    
    for(i = n1; i <= n2; i++)
    {
        x1 = Math.floor(i / 100000) % 10;
        x2 = Math.floor(i / 10000) % 10;
        x3 = Math.floor(i / 1000) % 10;
        x4 = Math.floor(i / 100) % 10;
        x5 = Math.floor(i / 10) % 10;
        x6 = i % 10;
        let evenSum = x1 + x3 + x5;
        let oddSum = x2 + x4 + x6;
        if(evenSum == oddSum) linex += `${i} `;
    }
    console.log(linex);
}