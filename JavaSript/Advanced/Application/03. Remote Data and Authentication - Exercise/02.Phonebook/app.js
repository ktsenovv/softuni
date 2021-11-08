function attachEvents() {
    const btnLoad = document.getElementById('btnLoad');
    btnLoad.addEventListener('click', loadContacts.bind(null, btnLoad));
    document.getElementById('btnCreate').addEventListener('click', onCreate);
    list.addEventListener('click', onDelete);

    loadContacts(btnLoad);
}

const list = document.getElementById('phonebook');
const personInput = document.getElementById('person');
const phoneInput = document.getElementById('phone');

attachEvents();

async function loadContacts(btnLoad) {
    btnLoad.textContent = 'Loading...';
    btnLoad.disabled = true;

    const data = await request('http://localhost:3030/jsonstore/phonebook');

    btnLoad.textContent = 'Load';
    btnLoad.disabled = false;

    list.replaceChildren(...Object.values(data).map(createItem));
}

function createItem(contact) {
    const liElement = document.createElement('li');
    liElement.textContent = `${contact.person}: ${contact.phone}`;

    const button = document.createElement('button');
    button.textContent = 'Delete';
    button.setAttribute('data-id', contact._id);

    liElement.appendChild(button);

    return liElement;
}

async function onCreate(event) {
    const button = event.target;
    const person = personInput.value.trim();
    const phone = phoneInput.value.trim();

    try {
        if (person == '' || phone == '') {
            throw new Error('All fields are required!');
        }

        button.textContent = 'Creating...';
        button.disabled = true;

        const data = await createContact({ person, phone });

        button.textContent = 'Create';
        button.disabled = false;

        personInput.value = '';
        phoneInput.value = '';

        list.appendChild(createItem(data));
    } catch (err) {
        alert(err.message);
    }
}

async function onDelete(event) {
    const id = event.target.dataset.id;
    if (id == undefined) {
        return;
    }

    const button = event.target;
    button.textContent = 'Deleting...';
    button.disabled = true;

    await deleteContact(id);

    button.textContent = 'Delete';
    button.disabled = false;
    button.parentElement.remove();
}

async function createContact(contact) {
    return await request('http://localhost:3030/jsonstore/phonebook', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact)
    });
}

async function deleteContact(id) {
    return await request(`http://localhost:3030/jsonstore/phonebook/${id}`, {
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