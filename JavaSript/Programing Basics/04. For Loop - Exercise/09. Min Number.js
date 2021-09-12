function minNumber(input) {
    let n = Number(input[0]);
    let low = Number(input[1]);

    for(let i = 2; i <= n; i++) {
        let inp = Number(input[i]);


        if(inp < low) {
            low = inp;
        }
    }

    console.log(low);
}