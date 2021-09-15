function oldBooks(input) {
    let sbook = input[0];
    let index = 1;
    let bookIsFound = false

    let book = input[index];
    while(book !== 'No More Books')
    {
	    if(sbook == book) {
            bookIsFound = true;
            break;
        }

        index++;
        book = input[index];
    }

    if(bookIsFound === true) {
        console.log(`You checked ${index - 1} books and found it.`);
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index - 1} books.`);
    }
}