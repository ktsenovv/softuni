function solve() {
    const moviesUl = document.querySelector('#movies ul');
    const archiveUl = document.querySelector('#archive ul');

    document.querySelector('#container button').addEventListener('click', onScreen);
    document.querySelector('#archive button').addEventListener('click', clear);

    function onScreen(e) {
        e.preventDefault();

        const [inputName, inputHall, inputTicketPrice] = document.querySelectorAll('input[type="text"]');
        const ticketPrice = Number(inputTicketPrice.value);

        let isValid = inputName.value.length && inputHall.value.length
            && inputTicketPrice.value.length && !Number.isNaN(ticketPrice);

        if (isValid) {
            const li = createElement('li', {}, {},
                createElement('span', {}, {}, inputName.value),
                createElement('strong', {}, {}, `Hall: ${inputHall.value}`),
                createElement('div', {}, {},
                    createElement('strong', {}, {}, ticketPrice.toFixed(2)),
                    createElement('input', { placeholder: 'Tickets Sold' }),
                    createElement('button', {}, { type: 'click', func: archive }, 'Archive'),
                )
            );
            moviesUl.appendChild(li);
        }

        inputName.value = '';
        inputHall.value = '';
        inputTicketPrice.value = '';
    }

    function archive(e) {
        const element = e.target;
        const name = element.parentElement.parentElement.querySelector('span');
        const ticketPrice = element.parentElement.querySelector('strong');
        const ticketQuantity = element.parentElement.querySelector('input');

        let totalPrice = Number(ticketPrice.textContent) * Number(ticketQuantity.value);

        if (ticketQuantity.value.length && !Number.isNaN(totalPrice)) {
            const li = createElement('li', {}, {},
                createElement('span', {}, {}, name.textContent),
                createElement('strong', {}, {}, `Total amount: ${totalPrice.toFixed(2)}`),
                createElement('button', {}, { type: 'click', func: remove }, 'Delete'
                )
            );

            element.parentElement.parentElement.remove();
            archiveUl.appendChild(li);
        }
    }

    function remove(e) {
        e.target.parentElement.remove();
    }

    function clear(e) {
        archiveUl.innerHTML = '';
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