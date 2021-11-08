let userData = null;
const tbody = document.querySelector('tbody');
const buyBtn = document.getElementById('buyBtn');
const ordersBtn = document.querySelector('.orders button');

window.addEventListener('DOMContentLoaded', () => {
    userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData == null) {
        window.location = './index.html';
        return;
    }

    document.getElementById('logoutBtn').addEventListener('click', onLogout);
    document.querySelector('form').addEventListener('submit', onCreate);
    buyBtn.addEventListener('click', onBuy);
    ordersBtn.addEventListener('click', onAllOrders);

    onLoadData();
});

async function onLogout() {
    if (!userData) {
        return;
    }

    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.textContent = 'Loggin out...';

    await logout();

    logoutBtn.textContent = 'Logout';

    sessionStorage.removeItem('userData');
    location.reload();
}

async function onLoadData() {
    const loading = createRowColSpan('Loading...');
    tbody.appendChild(loading);

    const data = await loadData();

    loading.remove();
    document.querySelector('tbody').replaceChildren(...data.map(createPreview));
}

async function onCreate(event) {
    event.preventDefault();
    if (!userData) {
        window.location = './index.html';
        return;
    }

    const createBtn = document.querySelector('form button');
    const formData = new FormData(event.target);
    const data = [...formData.entries()].reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});

    try {
        if (Object.values(data).some(x => x == '')) {
            throw new Error('All fields are required!');
        }

        createBtn.textContent = 'Creating...';
        createBtn.disabled = true;

        await createData(data);

        createBtn.textContent = 'Create';
        createBtn.disabled = false;

        event.target.reset();
        onLoadData();
    } catch (err) {
        alert(err.message);
    }
}

async function onBuy() {
    if (!userData) {
        window.location = './index.html';
        return;
    }

    const buyList = {};
    const items = [...tbody.children].filter(c => c.lastChild.firstChild.checked);

    items.forEach(i => {
        const [img, name, price] = i.children;
        buyList[name.textContent] = price.textContent;
    });

    try {
        if (Object.keys(buyList).length == 0) {
            throw new Error('Please, check one or more items!')
        }

        buyBtn.textContent = 'Buying...';
        buyBtn.disabled = true;

        await buyData(buyList);

        buyBtn.textContent = 'Buy';
        buyBtn.disabled = false;

        location.reload();
    } catch (err) {
        alert(err.message);
    }
}

async function onAllOrders() {
    if (!userData) {
        window.location = './index.html';
        return;
    }

    let totalSum = 0;
    const boughtItems = [];

    ordersBtn.textContent = 'Loading...';
    ordersBtn.disabled = true;

    const buyList = await allOrdersByUser();

    ordersBtn.textContent = 'All orders';
    ordersBtn.disabled = false;

    Object.values(buyList).forEach(order => {
        Object.keys(order).forEach(key => {
            if (!key.startsWith('_')) {
                boughtItems.push(key);
                totalSum += Number(order[key]);
            }
        });
    });

    document.querySelector('#buyList').textContent = boughtItems.join(', ');
    document.querySelector('#buyTotal').textContent = `${totalSum} $`;
}

async function logout() {
    await request('http://localhost:3030/users/logout', {
        method: 'get',
        headers: { 'X-Authorization': userData.token }
    }, false);
}

async function loadData() {
    return await request('http://localhost:3030/data/furniture');
}

async function createData(data) {
    await request('http://localhost:3030/data/furniture', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userData.token
        },
        body: JSON.stringify(data)
    });
}

async function buyData(data) {
    await fetch('http://localhost:3030/data/orders', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userData.token
        },
        body: JSON.stringify(data)
    });
}

async function allOrdersByUser() {
    return await request(`http://localhost:3030/data/orders?where=_ownerId%3D"${userData.id}"`);
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
    return e('tr', {},
        e('td', {}, e('img', { 'set-src': item.img })),
        e('td', {}, e('p', {}, item.name)),
        e('td', {}, e('p', {}, item.price)),
        e('td', {}, e('p', {}, item.factor)),
        e('td', {}, e('input', { 'set-type': 'checkbox' }))
    );
}

function createRowColSpan(content) {
    return e('tr', {},
        e('td', { 'set-colspan': '5', 'set-style': 'text-align: center;' }, content),
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