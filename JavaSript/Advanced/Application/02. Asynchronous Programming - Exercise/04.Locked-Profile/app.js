async function lockedProfile() {
    const url = `http://localhost:3030/jsonstore/advanced/profiles`;
    const main = document.getElementById('main');

    try {
        main.replaceChildren();
        
        const res = await fetch(url);
        if (res.ok != true) {
            throw new Error();
        }

        const data = await res.json();
        Object.values(data).forEach((p, i) => {
            i++;

            const button = createElement('button', {}, {}, 'Show more');
            const hiddenFields = createElement('div', { id: `user${i}HiddenFields`, style: { display: 'none' } }, {},
                createElement('hr'),
                createElement('label', {}, {}, 'Email:'),
                createElement('input', { type: 'email', name: `user${i}Email`, value: p.email, disabled: true, readonly: true }, {}),
                createElement('label', {}, {}, 'Age:'),
                createElement('input', { type: 'email', name: `user${i}Age`, value: p.age, disabled: true, readonly: true }, {}),
            );

            const profile = createElement('div', { className: 'profile' }, {},
                createElement('img', { src: './iconProfile2.png', className: 'userIcon' }, {}),
                createElement('label', {}, {}, 'Lock'),
                createElement('input', { type: 'radio', name: `user${i}Locked`, value: 'lock', checked: true }, {}),
                createElement('label', {}, {}, 'Unlock'),
                createElement('input', { type: 'radio', name: `user${i}Locked`, value: 'unlock' }, {}),
                createElement('hr'),
                createElement('label', {}, {}, 'Username'),
                createElement('input', { type: 'text', name: `user${i}Username`, value: p.username, disabled: true, readonly: true }, {}),
                hiddenFields,
                button,
            );

            button.addEventListener('click', onToggle.bind(null, button, hiddenFields));
            main.appendChild(profile);
        });
    } catch (error) {
        console.log(error);
    }
}

function onToggle(button, hiddenFields) {
    const isUnlocked = button.parentElement.querySelector('input[type="radio"][value="unlock"]').checked;
    if (isUnlocked == false) {
        return;
    }

    if (button.textContent == 'Show more') {
        button.textContent = 'Hide it';
        hiddenFields.style.display = 'block';
    } else {
        button.textContent = 'Show more';
        hiddenFields.style.display = 'none';
    }
}

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