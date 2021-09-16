function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);
    let linex = '';
    
    for(let i = floors; i > 0; i--)
    {
        for(j = 0; j < rooms; j++) {
            linex += (i == floors ? 'L' : (i % 2 == 0 ? 'O' : 'A')) + i + j + ' ';
        }
        linex += '\n';
    }

    console.log(linex);
}