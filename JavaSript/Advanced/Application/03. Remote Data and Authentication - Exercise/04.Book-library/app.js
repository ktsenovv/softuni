const tbody = document.querySelector('tbody');
const form = document.querySelector('form');
const submit = document.querySelector('form button');
const loadBtn = document.getElementById('loadBooks');

tbody.addEventListener('click', onTableClick);
form.addEventListener('submit', onSubmit);
loadBtn.addEventListener('click', onLoadBooks);

onLoadBooks();

async function onLoadBooks() {
    loadBtn.textContent = 'Loading...';
    loadBtn.disabled = true;

    const books = await loadBooks();

    loadBtn.textContent = 'LOAD ALL BOOKS';
    loadBtn.disabled = false;

    const result = Object.entries(books).map(([id, book]) => createRow(id, book));
    tbody.replaceChildren(...result);
}

function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const id = formData.get('id');
    const title = formData.get('title');
    const author = formData.get('author');

    try {
        if (title == '' || author == '') {
            throw new Error('All fields are required!');
        }

        if (submit.textContent == 'Submit') {
            onCreateSubmit(title, author);
        } else if (submit.textContent == 'Save') {
            onEditSubmit(id, title, author);
        }

        event.target.reset();
    } catch (err) {
        alert(err.message);
    }
}

async function onCreateSubmit(title, author) {
    submit.textContent = 'Submiting...';
    submit.disabled = true;

    const result = await createBook({ author, title });
    tbody.appendChild(createRow(result._id, result));

    submit.textContent = 'Submit';
    submit.disabled = false;
}

async function onEditSubmit(id, title, author) {
    submit.textContent = 'Saving...';
    submit.disabled = true;

    await updateBook(id, { author, title });
    onLoadBooks();

    submit.textContent = 'Submit';
    submit.disabled = false;
    form.querySelector('[name="id"]').removeAttribute('value');
}

function onTableClick(event) {
    if (event.target.className == 'edit') {
        onEdit(event.target)
    } else if (event.target.className == 'delete') {
        onDelete(event.target);
    }
}

async function onEdit(button) {
    button.textContent = 'Loading...';
    button.disabled = true;

    const id = button.dataset.id;
    const book = await loadBookById(id);

    submit.textContent = 'Save';
    button.textContent = 'Edit';
    button.disabled = false;

    form.querySelector('[name="id"]').value = id;
    form.querySelector('[name="author"]').value = book.author;
    form.querySelector('[name="title"]').value = book.title;
}

async function onDelete(button) {
    button.textContent = 'Deleting...';
    button.disabled = true;

    const id = button.dataset.id;
    await deleteBook(id);

    button.textContent = 'Delete';
    button.disabled = true;
    
    button.parentElement.parentElement.remove();
}

async function loadBooks() {
    return await request('http://localhost:3030/jsonstore/collections/books');
}

async function loadBookById(id) {
    return await request(`http://localhost:3030/jsonstore/collections/books/${id}`);
}

async function createBook(book) {
    return await request('http://localhost:3030/jsonstore/collections/books', {
        method: 'post',
        body: JSON.stringify(book)
    });
}

async function updateBook(id, book) {
    return await request(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        method: 'put',
        body: JSON.stringify(book)
    });
}

async function deleteBook(id) {
    return await request(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        method: 'delete'
    });
}

async function request(url, options) {
    if (options && options.body != undefined) {
        Object.assign(options, {
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        const response = await fetch(url, options);

        if (response.ok != true) {
            const error = await response.json();
            throw new Error(error.message);
        }

        return await response.json();
    } catch (err) {
        console.log(err);
    }
}

function createRow(id, book) {
    return e('tr', {},
        e('td', {}, book.title),
        e('td', {}, book.author),
        e('td', {},
            e('button', { 'set-class': 'edit', 'set-data-id': id }, 'Edit'),
            e('button', { 'set-class': 'delete', 'set-data-id': id }, 'Delete')
        )
    );
}

function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else if (attr.substring(0, 4) == 'set-') {
            result.setAttribute(attr.substring(4), value);
        } else {
            if (typeof value == 'object') {
                for (let [subAttr, subValue] of Object.entries(value)) {
                    result[attr][subAttr] = subValue;
                }
            } else {
                result[attr] = value;
            }
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}