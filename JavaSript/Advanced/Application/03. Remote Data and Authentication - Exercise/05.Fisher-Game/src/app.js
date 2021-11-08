let userData = null;
const loadBtn = document.querySelector('.load');
const addBtn = document.querySelector('#addForm .add');
const addForm = document.getElementById('addForm');
const logoutBtn = document.getElementById('logout');
const catches = document.getElementById('catches');

window.addEventListener('DOMContentLoaded', () => {
    userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData != null) {
        document.getElementById('guest').style.display = 'none';
        addBtn.disabled = false;
        document.querySelector('.email span').textContent = userData.email;
        logoutBtn.addEventListener('click', onLogout);
    } else {
        document.getElementById('user').style.display = 'none';
    }

    catches.addEventListener('click', onCatchesClick)
    loadBtn.addEventListener('click', onLoadData);
    addForm.addEventListener('submit', onAddData);

    onLoadData();
});

async function onLogout() {
    if (!userData) {
        return;
    }

    logoutBtn.textContent = 'Logging out...';

    await logout();

    logoutBtn.textContent = 'Logout';

    sessionStorage.removeItem('userData');
    location.reload();
}

async function onLoadData() {
    loadBtn.textContent = 'Loading...';
    loadBtn.disabled = true;

    const data = await loadData();

    loadBtn.textContent = 'Load';
    loadBtn.disabled = false;

    catches.replaceChildren(...data.map(createPreview));
}

async function onAddData(event) {
    event.preventDefault();
    if (!userData) {
        window.location = '/login.html';
        return;
    }

    const formData = new FormData(event.target);
    const data = [...formData.entries()].reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});

    try {
        if (Object.values(data).some(x => x == '')) {
            throw new Error('All fields are required!');
        }

        addBtn.textContent = 'Adding...';
        addBtn.disabled = true;

        await addData(data);

        addBtn.textContent = 'Add';
        addBtn.disabled = false;

        event.target.reset();
        onLoadData();
    } catch (err) {
        alert(err.message);
    }
}

function onCatchesClick(event) {
    if (event.target.className == 'update') {
        onUpdateData(event.target)
    } else if (event.target.className == 'delete') {
        onDeleteData(event.target);
    }
}

async function onUpdateData(button) {
    if (!userData) {
        window.location = '/login.html';
        return;
    }

    const data = [...button.parentElement.querySelectorAll('input')].reduce((a, e) => Object.assign(a, { [e.className]: e.value }), {});
    const id = button.dataset.id;

    try {
        if (Object.values(data).some(x => x == '')) {
            throw new Error('All fields are required!');
        }

        button.textContent = 'Updating...';
        button.disabled = true;

        await updateData(id, data);

        button.textContent = 'Update';
        button.disabled = false;

        onLoadData();
    } catch (err) {
        alert(err.message);
    }
}

async function onDeleteData(button) {
    if (!userData) {
        window.location = '/login.html';
        return;
    }

    const id = button.dataset.id;

    button.textContent = 'Deleting...';
    button.disabled = true;

    await deleteData(id);

    button.textContent = 'Delete';
    button.disabled = false;
    button.parentElement.remove();
}

async function logout() {
    await request('http://localhost:3030/users/logout', {
        method: 'get',
        headers: { 'X-Authorization': userData.token }
    }, false);
}

async function loadData() {
    return await request('http://localhost:3030/data/catches');
}

async function addData(data) {
    await request('http://localhost:3030/data/catches', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userData.token
        },
        body: JSON.stringify(data)
    });
}

async function updateData(id, data) {
    await request(`http://localhost:3030/data/catches/${id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userData.token
        },
        body: JSON.stringify(data)
    });
}

async function deleteData(id) {
    await request(`http://localhost:3030/data/catches/${id}`, {
        method: 'delete',
        headers: {
            'X-Authorization': userData.token
        }
    });
}

async function request(url, options, rtrn = true) {
    try {
        const response = await fetch(url, options);

        if (response.ok != true) {
            const error = await response.json();
            throw new Error(error.message);
        }

        if (rtrn) {
            return await response.json();
        }
    } catch (err) {
        alert(err.message);
    }
}

function createPreview(item) {
    const isOwner = (userData && item._ownerId == userData.id);
    const isDisabled = !isOwner ? true : false;

    return e('div', { 'set-class': 'catch' },
        e('label', {}, 'Angler'),
        e('input', { 'set-type': 'text', 'set-class': 'angler', 'set-value': item.angler, disabled: isDisabled }),
        e('label', {}, 'Weight'),
        e('input', { 'set-type': 'text', 'set-class': 'weight', 'set-value': item.weight, disabled: isDisabled }),
        e('label', {}, 'Species'),
        e('input', { 'set-type': 'text', 'set-class': 'species', 'set-value': item.species, disabled: isDisabled }),
        e('label', {}, 'Location'),
        e('input', { 'set-type': 'text', 'set-class': 'location', 'set-value': item.location, disabled: isDisabled }),
        e('label', {}, 'Bait'),
        e('input', { 'set-type': 'text', 'set-class': 'bait', 'set-value': item.bait, disabled: isDisabled }),
        e('label', {}, 'Capture Time'),
        e('input', { 'set-type': 'number', 'set-class': 'captureTime', 'set-value': item.captureTime, disabled: isDisabled }),
        e('button', { 'set-class': 'update', 'set-data-id': item._id, disabled: isDisabled }, 'Update'),
        e('button', { 'set-class': 'delete', 'set-data-id': item._id, disabled: isDisabled }, 'Delete')
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