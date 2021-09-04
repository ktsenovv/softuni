function calcArea(input) {
    let figure = input[0];
    let num1 = Number(input[1]);

    if(figure == 'square') {
        result = num1 * num1;
    } else if(figure == 'rectangle') {
        let num2 = Number(input[2]);
        result = num1 * num2;
    } else if(figure == 'circle') {
        result = Math.PI * num1 * num1;
    } else if(figure == 'triangle') {
        let num2 = Number(input[2]);
        result = (num1 * num2) / 2;
    }
    console.log(result.toFixed(3));
}