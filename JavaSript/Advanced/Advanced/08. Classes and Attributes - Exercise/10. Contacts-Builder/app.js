class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
    }

    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;

        if (this.title) {
            this.title.className = this._online ? 'title online' : 'title';
        }
    }

    render(id) {
        this.title = this._createElement('div', { className: this.online ? 'title online' : 'title' }, {},
            `${this.firstName} ${this.lastName}`,
            this._createElement('button', {}, { type: 'click', func: () => { this.info.style.display = this.info.style.display == 'none' ? 'block' : 'none'; } }, '\u2139')
        );

        this.info = this._createElement('div', { className: 'info', style: { display: 'none' } }, {},
            this._createElement('span', {}, {}, `\u260E ${this.phone}`),
            this._createElement('span', {}, {}, `\u2709 ${this.email}`),
        );

        this.article = this._createElement('article', {}, {},
            this.title,
            this.info
        );

        document.getElementById(id).appendChild(this.article);
    }

    _createElement(type, properties, event, ...content) {
        const element = document.createElement(type);

        for (let prop in properties) {
            if (typeof(properties[prop]) == 'object') {
                for (let propp in properties[prop]) {
                    element[prop][propp] = properties[prop][propp];
                }
            } else {
                element[prop] = properties[prop];
            }
        }

        for (let entry of content) {
            if (typeof(entry) == 'string' || typeof(entry) == 'number') {
                entry = document.createTextNode(entry);
            }
            element.appendChild(entry);
        }

        if (typeof (event) == 'object' && Object.keys(event).length !== 0) {
            element.addEventListener(event.type, event.func)
        }

        return element;
    }
};

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];

contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);