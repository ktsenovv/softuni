function maxNumber(input) {
    let output = [];
    while(input.length !== 0) {
        let [current, biggest] = [input.shift(), Math.max(...input)];
        
        if(current > biggest) {
            output.push(current);
        }
   }
   console.log(output.join(' '));
}

maxNumber([14, 24, 3, 19, 15, 17]);