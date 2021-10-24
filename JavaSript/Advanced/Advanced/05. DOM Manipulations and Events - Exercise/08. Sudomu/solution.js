function solve() {
    const table = document.querySelector('#exercise table');
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    const output = document.getElementById('check');
    const maxInputNum = document.querySelector('tfoot tr td').colSpan;

    const [checkButton, clearButton] = document.getElementsByTagName('button');
    checkButton.addEventListener('click', check)
    clearButton.addEventListener('click', clear);

    function check() {
        const matrix = [];

        rows.forEach(element => {
            const currentRow = [];

            Array
                .from(element.querySelectorAll('td input'))
                .forEach(children => { currentRow.push(Number(children.value)); });

            matrix.push(currentRow);
        });


        if (checkMatrix(matrix)) {
            table.style.border = "2px solid green";
            output.children[0].textContent = 'You solve it! Congratulations!';
            output.children[0].style.color = "green";
        } else {
            table.style.border = "2px solid red";
            output.children[0].textContent = 'NOP! You are not done yet...';
            output.children[0].style.color = "red";
        }
    }

    function clear() {
        table.style.border = '';
        output.children[0].textContent = '';

        rows.forEach(element => {
            Array
                .from(element.querySelectorAll('td input'))
                .forEach(children => { children.value = ''; });
        })
    }

    function checkMatrix(matrix) {
        let isValid = true;

        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length - 1; col++) {
                for (let currCol = col + 1; currCol < matrix[row].length; currCol++) {
                    if (matrix[row][col] == matrix[row][currCol]) {
                        isValid = false;
                    }
                }
            }
        }

        for (let col = 0; col < matrix.length; col++) {
            for (let row = 0; row < matrix.length - 1; row++) {
                for (let currRow = row + 1; currRow < matrix.length; currRow++) {
                    if (matrix[row][col] == matrix[currRow][col]) {
                        isValid = false;
                    }
                }
            }
        }

        matrix.forEach(element => {
            element.forEach(v => {
                if (v < 1 || v > maxInputNum) {
                    isValid = false;
                }
            });
        });

        return isValid;
    }
}