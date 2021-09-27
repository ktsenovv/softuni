function LastKNumbersSequence(n, k) {
    let seq = [1];
    for (let i = 1; i < n; i++) {
        let elements = seq.slice(-k);
        
        let current = 0;
        for (let num of elements) {
            current += num;
        }
        
        seq.push(current);
    }
    console.log(seq.join(' '));
}

LastKNumbersSequence(8, 2);