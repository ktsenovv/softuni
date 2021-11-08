window.addEventListener('DOMContentLoaded', () => {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData != null) {
        window.location = './indexLogged.html';
        return;
    }

    onLoadData();
});

async function onLoadData() {
    const tbody = document.querySelector('tbody');
    const loading = createRowColSpan('Loading...');
    tbody.appendChild(loading);

    const data = await loadData();

    loading.remove();
    document.querySelector('tbody').replaceChildren(...data.map(createPreview));
}

async function loadData() {
    return await request('http://localhost:3030/data/furniture');
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
        e('td', {}, e('input', { 'set-type': 'checkbox', disabled: true }))
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