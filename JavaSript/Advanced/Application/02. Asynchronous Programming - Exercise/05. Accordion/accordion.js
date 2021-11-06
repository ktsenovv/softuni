async function solution() {
    const url = `http://localhost:3030/jsonstore/advanced/articles/list`;

    const articleList = await getData(url);
    articleList.forEach(a => {
        const button = createElement('button', { className: 'button', id: a._id }, {}, 'More');
        const extra = createElement('div', { className: 'extra' }, {},
            createElement('p'),
        );
        const article = createElement('div', { className: 'accordion' }, {},
            createElement('div', { className: 'head' }, {},
                createElement('span', {}, {}, a.title),
                button
            ),
            extra
        );

        button.addEventListener('click', onToggle.bind(null, button, extra));
        document.getElementById('main').appendChild(article);
    });
}

async function onToggle(button, extra) {
    if (button.textContent == 'More') {
        button.textContent = 'Loading...';

        const url = `http://localhost:3030/jsonstore/advanced/articles/details/${button.id}`;
        const details = await getData(url);

        button.textContent = 'Less';
        extra.style.display = 'block';
        extra.firstChild.textContent = details.content;
    } else {
        button.textContent = 'More';
        extra.style.display = '';
    }
}

async function getData(url) {
    try {
        const res = await fetch(url);
        if (res.ok != true) {
            throw new Error();
        }

        return await res.json();
    } catch (error) {
        return error;
    }
}

solution();

function createElement(type, properties, evnt, ...content) {
    const element = document.createElement(type);

    for (let prop in properties) {
        if (typeof (properties[prop]) == 'object') {
            for (let propp in properties[prop]) {
                element[prop][propp] = properties[prop][propp];
            }
        } else {
            element[prop] = properties[prop];
        }
    }

    for (let entry of content) {
        if (typeof (entry) == 'string' || typeof (entry) == 'number') {
            entry = document.createTextNode(entry);
        }
        element.appendChild(entry);
    }

    if (typeof (evnt) == 'object' && Object.keys(evnt).length !== 0) {
        element.addEventListener(evnt.type, evnt.func)
    }

    return element;
}