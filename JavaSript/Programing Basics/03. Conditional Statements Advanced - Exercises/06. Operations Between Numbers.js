function opBetNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let op = input[2];
    
    switch(op)
    {
        case '+': console.log(`${n1} ${op} ${n2} = ${n1 + n2} - ${((n1 + n2) % 2 == 0) ? 'even' : 'odd'}`); break;
        case '-': console.log(`${n1} ${op} ${n2} = ${n1 - n2} - ${((n1 - n2) % 2 == 0) ? 'even' : 'odd'}`); break;
        case '*': console.log(`${n1} ${op} ${n2} = ${n1 * n2} - ${((n1 * n2) % 2 == 0) ? 'even' : 'odd'}`); break;
        case '/':
        {
            if(n2 == 0) console.log(`Cannot divide ${n1} by zero`);
            else console.log(`${n1} ${op} ${n2} = ${(n1 / n2).toFixed(2)}`);
        } break;
        case '%':
        {
            if(n2 == 0) console.log(`Cannot divide ${n1} by zero`);
            else console.log(`${n1} ${op} ${n2} = ${n1 % n2}`);
        } break;
    }
}