function solve() {
    const input = document.getElementById('input');
    const select = document.getElementById('selectMenuTo');
    select.innerHTML = '<option selected value="binary">Binary</option><option value="hexadecimal">Hexadecimal</option>';

    document.querySelector('button').onclick = function() {
        let result = 0;
        let number = Number(input.value);

        if (select.value == 'binary') {
            result = (number >>> 0).toString(2);
        } else if (select.value == 'hexadecimal') {
            result = number.toString(16).toUpperCase();
        }

        document.getElementById('result').value = result;
    }
}