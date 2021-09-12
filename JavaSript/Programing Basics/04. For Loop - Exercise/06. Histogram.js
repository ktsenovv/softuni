function histogram(input) {
    let n = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for(let i = 0; i < n; i++)
    {
    	let inp = input[i+1];
        
    	if(inp >= 800) {
            p5++;
        } else if(inp < 200) {
            p1++;
        } else if(inp < 400) {
            p2++;
        } else if(inp < 600) {
            p3++;
        } else {
            p4++;
        }
    }

    console.log(`${(p1 / n * 100).toFixed(2)}%`);
    console.log(`${(p2 / n * 100).toFixed(2)}%`);
    console.log(`${(p3 / n * 100).toFixed(2)}%`);
    console.log(`${(p4 / n * 100).toFixed(2)}%`);
    console.log(`${(p5 / n * 100).toFixed(2)}%`);
}