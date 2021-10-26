function solve() {
    document.getElementById('add').addEventListener('click', add);
    const openSection = document.getElementsByTagName('section')[1].children[1];
    const completeSection = document.getElementsByTagName('section')[3].children[1];
    const progressSection = document.getElementById('in-progress');

    function add(e) {
        e.preventDefault(); // We block the form to refresh
        const button = e.target;
        const [task, date] = button.parentElement.querySelectorAll('input[type="text"]');
        const desc = button.parentElement.querySelector('#description');

        const isValid = task.value.length && desc.value.length && date.value.length;
        if (!isValid)
            return;

        const article = createElement('article', {}, {},
            createElement('h3', {}, {}, task.value),
            createElement('p', {}, {}, `Description: ${desc.value}`),
            createElement('p', {}, {}, `Due Date: ${date.value}`),
            createElement('div', { classList: 'flex' }, {},
                createElement('button', { classList: 'green' }, { type: 'click', func: actions }, 'Start'),
                createElement('button', { classList: 'red' }, { type: 'click', func: actions }, 'Delete'),
            )
        );
        openSection.appendChild(article);
    }

    function actions(e) {
        const button = e.target;
        const task = button.parentElement.parentElement.querySelector('h3');
        const [desc, date] = button.parentElement.parentElement.querySelectorAll('p');

        if (button.textContent === 'Start') {
            const article = createElement('article', {}, {},
                createElement('h3', {}, {}, task.textContent),
                createElement('p', {}, {}, `Description: ${desc.textContent.split(': ')[1]}`),
                createElement('p', {}, {}, `Due Date: ${date.textContent.split(': ')[1]}`),
                createElement('div', { classList: 'flex' }, {},
                    createElement('button', { classList: 'red' }, { type: 'click', func: actions }, 'Delete'),
                    createElement('button', { classList: 'orange' }, { type: 'click', func: actions }, 'Finish'),
                )
            );

            progressSection.appendChild(article);
        } else if (button.textContent === 'Finish') {
            const article = createElement('article', {}, {},
                createElement('h3', {}, {}, task.textContent),
                createElement('p', {}, {}, `Description: ${desc.textContent.split(': ')[1]}`),
                createElement('p', {}, {}, `Due Date: ${date.textContent.split(': ')[1]}`)
            );

            completeSection.appendChild(article);
        }

        button.parentElement.parentElement.remove();
    }

    function createElement(type, props, event, ...content) {
        const element = document.createElement(type);

        for (let prop in props) {
            element[prop] = props[prop];
        }

        for (let entry of content) {
            if (typeof entry == 'string' || typeof entry == 'number') {
                entry = document.createTextNode(entry);
            }
            element.appendChild(entry);
        }

        if (typeof (event) == 'object' && Object.keys(event).length !== 0) {
            element.addEventListener(event.type, event.func)
        }

        return element;
    }
}