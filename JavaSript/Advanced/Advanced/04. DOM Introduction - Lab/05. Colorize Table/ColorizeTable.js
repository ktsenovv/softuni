function colorize() {
    const items = document.getElementsByTagName('tr');

    for (let i = 1; i < items.length; i+= 2) {
        items[i].style.background = 'teal';
    }
}