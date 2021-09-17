function numberPyramid(input) {
    let n = Number(input[0]);

    let current = 1;
    let isBigger = false;
    let linex = '';
    
    for(let row = 1; row <= n; row++)
    {
        for(let col = 1; col <= row; col++)
        {
            if(current > n)
            {
                isBigger = true;
                break;
            }
            linex += current + ' ';
            current++;
        }
        console.log(linex);
        linex = '';
        if(isBigger) break;
    }
}