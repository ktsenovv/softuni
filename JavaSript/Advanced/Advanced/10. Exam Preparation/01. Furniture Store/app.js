window.addEventListener('load', solve);

function solve() {
    const fields = Array.from(document.querySelectorAll('.store input'));
    const fdesc = document.getElementById('description');
    const furnitureList = document.getElementById('furniture-list');
    const addBtn = document.getElementById('add');

    addBtn.addEventListener('click', add);

    function add(e) {
        e.preventDefault();

        let [model, year, price] = fields.map(f => f.value.trim());
        year = Number(year);
        price = Number(price);
        const desc = fdesc.value.trim();

        if (fields.map(f => f.value.trim()).some(v => v == '') || desc == '' || Number.isNaN(year) || year < 0 || Number.isNaN(price) || price < 0) {
            return;
        }

        const moreInfoBtn = createElement('button', { className: 'moreBtn' }, {}, 'More Info');
        const buyItBtn = createElement('button', { className: 'buyBtn' }, {}, 'Buy it');
        const furniture = createElement('tr', { className: 'info' }, {},
            createElement('td', {}, {}, model),
            createElement('td', {}, {}, price.toFixed(2)),
            createElement('td', {}, {},
                moreInfoBtn,
                buyItBtn
            )
        );

        const moreInfo = createElement('tr', { className: 'hide' }, {},
            createElement('td', {}, {}, `Year: ${year}`),
            createElement('td', { colSpan: 3 }, {}, `Description: ${desc}`)
        );

        moreInfoBtn.addEventListener('click', more.bind(null, moreInfo, moreInfoBtn));
        buyItBtn.addEventListener('click', buy.bind(null, furniture, moreInfo, price));

        furnitureList.appendChild(furniture);
        furnitureList.appendChild(moreInfo);

        fields.forEach(f => f.value = '');
        fdesc.value = '';
    }

    function more(moreInfo, moreInfoBtn) {
        if (moreInfo.style.display == '') {
            moreInfo.style.display = 'contents';
            moreInfoBtn.textContent = 'Less Info';
        } else {
            moreInfo.style.display = '';
            moreInfoBtn.textContent = 'More Info';
        }
        
    }

    function buy(furniture, moreInfo, price) {
        const totalPrice = document.querySelector('.total-price');
        let total = Number(totalPrice.textContent);
        total += price;
        totalPrice.textContent = total.toFixed(2);

        furniture.remove();
        moreInfo.remove();
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