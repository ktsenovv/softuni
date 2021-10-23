function addItem() {
    const liElement = document.createElement('li');
    liElement.textContent = document.getElementById('newItemText').value;

    const button = document.createElement('a');
    button.href = '#';
    button.textContent = '[Delete]';
    button.addEventListener('click', removeEl)

    liElement.appendChild(button);

    document.getElementById('items').appendChild(liElement);

    function removeEl(e) {
        const parent = e.target.parentNode;
        parent.remove();
    }
}