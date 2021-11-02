window.addEventListener('load', solution);

function solution() {
    const fields = Array.from(document.querySelectorAll('#form div input'));
    const infoPrev = document.getElementById('infoPreview');
    const submitBtn = document.getElementById('submitBTN');
    const editBtn = document.getElementById('editBTN');
    const continueBtn = document.getElementById('continueBTN');
    let data = [];

    submitBtn.addEventListener('click', preview);

    function preview() {
        let [fullName, email, phoneNumber, address, postalCode] = fields;

        if (fullName.value == '' || email.value == '') {
            return;
        }

        data = [fullName.value, email.value, phoneNumber.value, address.value, postalCode.value];

        const fullNameEl = createElement('li', {}, {}, `Full Name: ${fullName.value}`);
        const emailEl = createElement('li', {}, {}, `Email: ${email.value}`);
        const phoneNumberEl = createElement('li', {}, {}, `Phone Number: ${phoneNumber.value}`);
        const addressEl = createElement('li', {}, {}, `Address: ${address.value}`);
        const postalCodeEl = createElement('li', {}, {}, `Postal Code: ${postalCode.value}`);

        infoPrev.appendChild(fullNameEl);
        infoPrev.appendChild(emailEl);
        infoPrev.appendChild(phoneNumberEl);
        infoPrev.appendChild(addressEl);
        infoPrev.appendChild(postalCodeEl);

        fields.forEach(f => f.value = '');

        submitBtn.disabled = true;
        editBtn.disabled = false;
        continueBtn.disabled = false;

        editBtn.addEventListener('click', edit.bind(null, [fullNameEl, emailEl, phoneNumberEl, addressEl, postalCodeEl]));
        continueBtn.addEventListener('click', contin);
    }

    function edit(flds) {
        fields.forEach((f, i) => f.value = data[i]);
        flds.forEach(f => f.remove());

        submitBtn.disabled = false;
        editBtn.disabled = true;
        continueBtn.disabled = true;

        editBtn.removeEventListener('click', edit)
        continueBtn.removeEventListener('click', contin);
    }

    function contin() {
        document.getElementById('block').textContent = '';
        document.getElementById('block').appendChild(createElement('h3', {}, {}, 'Thank you for your reservation!'));
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