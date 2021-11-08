function attachEvents() {
    const refreshBtn = document.getElementById('refresh');
    refreshBtn.addEventListener('click', loadMessages.bind(null, refreshBtn));
    document.getElementById('submit').addEventListener('click', onSubmit);

    loadMessages(refreshBtn);
}

const authorInput = document.querySelector('[name="author"]');
const contentInput = document.querySelector('[name="content"]');
const list = document.getElementById('messages');

attachEvents();

async function loadMessages(refreshBtn) {
    const button = refreshBtn;

    list.value = 'Loading...';
    button.value = 'Loading...';
    button.disabled = true;

    const data = await request('http://localhost:3030/jsonstore/messenger');

    button.value = 'Refresh';
    button.disabled = false;

    const messages = Object.values(data);
    list.value = messages.map(m => `${m.author}: ${m.content}`).join('\n');
}

async function onSubmit(event) {
    const author = authorInput.value.trim();
    const content = contentInput.value.trim();
    const button = event.target;

    try {
        if (author == '' || content == '') {
            throw new Error('All fields are required!');
        }

        button.value = 'Loading...';
        button.disabled = true;

        await createMessage({ author, content });

        button.value = 'Send';
        button.disabled = false;
        contentInput.value = '';
        list.value += '\n' + `${author}: ${content}`;
    } catch (err) {
        alert(err.message);
    }
}

async function createMessage(message) {
    await request('http://localhost:3030/jsonstore/messenger', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message)
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