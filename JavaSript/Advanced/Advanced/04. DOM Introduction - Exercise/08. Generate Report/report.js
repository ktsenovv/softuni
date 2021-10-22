function generateReport() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const rows = document.querySelector('table').rows;
    const result = [];

    for (let row = 1; row < rows.length; row++) {
        const cols = rows[row].cells;
        const obj = {};

        for (let col = 0; col < cols.length; col++) {
            let checkbox = checkboxes[col];

            if (checkbox.checked) {
                obj[checkbox.name] = cols[col].textContent
            }
        }
        
        result.push(obj);
    }

    document.getElementById('output').value = JSON.stringify(result);
}