function specialNumbers(input) {
    let n = Number(input[0]);
    let linex = '';

    for (let i = 1; i <= 9; i++)
	    for (let j = 1; j <= 9; j++)
		    for (let m = 1; m <= 9; m++)
			    for (let k = 1; k <= 9; k++)
				    if (n % i == 0 && n % j == 0 && n % m == 0 && n % k == 0)
					    linex += `${i}${j}${m}${k} `;

    console.log(linex);
}