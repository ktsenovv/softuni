function solve() {
    const fields = Array.from(document.querySelectorAll('#container input'));
    const addBtn = document.querySelector('#container button');
    const petList = document.querySelector('#adoption ul');
    const adoptedList = document.querySelector('#adopted ul');

    addBtn.addEventListener('click', addPet);

    function addPet(e) {
        e.preventDefault();

        const [name, age, kind, owner] = fields.map(f => f.value.trim());

        if (fields.map(f => f.value.trim()).some(v => v == '') || Number.isNaN(Number(age))) {
            return;
        }

        const contactBtn = createElement('button', {}, {}, 'Contact with owner');
        const pet = createElement('li', {}, {},
            createElement('p', {}, {},
                createElement('strong', {}, {}, name),
                ' is a ',
                createElement('strong', {}, {}, age),
                ' year old ',
                createElement('strong', {}, {}, kind)
            ),
            createElement('span', {}, {}, `Owner: ${owner}`),
            contactBtn
        );

        contactBtn.addEventListener('click', contact.bind(null, pet, contactBtn));
        petList.appendChild(pet);

        fields.forEach(f => f.value = '');
    }

    function contact(pet, contactBtn) {
        const confirmInput = createElement('input', { placeholder: 'Enter your names' });
        const confirmDiv = createElement('div', {}, {},
            confirmInput,
            createElement('button', {}, { type: 'click', func: adopt.bind(null, pet, confirmInput) }, 'Yes! I take it!')
        );

        contactBtn.remove();
        pet.appendChild(confirmDiv);
    }

    function adopt(pet, confirmInput) {
        const newOwner = confirmInput.value.trim();

        if (newOwner == '') {
            return;
        }

        const checkBtn = createElement('button', {}, { type: 'click', func: check.bind(null, pet) }, 'Checked');

        pet.querySelector('div').remove();
        pet.appendChild(checkBtn);

        pet.querySelector('span').textContent = `New Owner: ${newOwner}`;

        adoptedList.appendChild(pet);
    }

    function check(pet) {
        pet.remove();
    }

    function createElement(type, properties, event, ...content) {
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

        if (typeof (event) == 'object' && Object.keys(event).length !== 0) {
            element.addEventListener(event.type, event.func)
        }

        return element;
    }
}