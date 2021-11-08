const tbody = document.querySelector('tbody');
const submit = document.getElementById('submit');

document.querySelector('form').addEventListener('submit', onSubmit);

onLoad();

async function onLoad() {
    const loading = createRowColSpan('Loading...');
    tbody.appendChild(loading);

    const students = await loadStudents();

    loading.remove();
    const result = Object.entries(students).map(([id, student]) => createRow(student));
    tbody.replaceChildren(...result);
}

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = [...formData.entries()].reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});

    try {
        if (Object.values(data).some(x => x == '')) {
            throw new Error('All fields are required!');
        }

        submit.textContent = 'Submiting...';
        submit.disabled = true;

        await addStudent(data);

        submit.textContent = 'Submit';
        submit.disabled = false;

        event.target.reset();
        onLoad();
    } catch (err) {
        alert(err.message);
    }
}

async function loadStudents() {
    return await request('http://localhost:3030/jsonstore/collections/students');
}

async function addStudent(data) {
    await request('http://localhost:3030/jsonstore/collections/students', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
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
        console.log(err.message);
    }
}

function createRow(student) {
    return e('tr', {},
        e('td', {}, student.firstName),
        e('td', {}, student.lastName),
        e('td', {}, student.facultyNumber),
        e('td', {}, student.grade)
    );
}

function createRowColSpan(content) {
    return e('tr', {},
        e('td', { 'set-colspan': '4', 'set-style': 'text-align: center;' }, content),
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