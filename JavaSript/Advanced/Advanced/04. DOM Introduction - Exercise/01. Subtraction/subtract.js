function subtract() {
    const firstNumber = document.getElementById('firstNumber').value;
    const secondNumber = document.getElementById('secondNumber').value;

    const sub = Number(firstNumber) - Number(secondNumber);
    document.getElementById('result').innerHTML = sub;
}