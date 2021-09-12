function divideWithoutReminder(input) {
    let n = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for(let i = 0; i < n; i++)
    {
	    let inp = input[i+1];
        
    	if(inp % 2 == 0) p1++;
	    if(inp % 3 == 0) p2++;
	    if(inp % 4 == 0) p3++;
    }

    console.log(`${(p1 / n * 100).toFixed(2)}%`);
    console.log(`${(p2 / n * 100).toFixed(2)}%`);
    console.log(`${(p3 / n * 100).toFixed(2)}%`);
}