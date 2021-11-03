window.addEventListener('load', solve);

function solve() {
    const fields = Array.from(document.querySelectorAll('.container-text input'));
    const addBtn = document.getElementById('add-btn');
    const allHits = document.querySelector('.all-hits-container');
    const totalLikes = document.querySelector('.likes p');
    const savedHits = document.querySelector('.saved-container');
    
    addBtn.addEventListener('click', add);

    function add(e) {
        e.preventDefault();

        let [genre, songName, songAuthor, createDate] = fields;

        if (fields.map(f => f.value.trim()).some(v => v == '')) {
            return;
        }

        const saveBtn = createElement('button', { className: 'save-btn' }, {}, 'Save song');
        const likeBtn = createElement('button', { className: 'like-btn' }, { type: 'click', func: like }, 'Like song')
        const deleteBtn = createElement('button', { className: 'delete-btn' }, {}, 'Delete')
        const hitsInfo = createElement('div', { className: 'hits-info' }, {},
            createElement('img', { src: './static/img/img.png' }),
            createElement('h2', {}, {}, `Genre: ${genre.value}`),
            createElement('h2', {}, {}, `Name: ${songName.value}`),
            createElement('h2', {}, {}, `Author: ${songAuthor.value}`),
            createElement('h3', {}, {}, `Date: ${createDate.value}`),
            saveBtn,
            likeBtn,
            deleteBtn
        );

        saveBtn.addEventListener('click', save.bind(null, hitsInfo, saveBtn, likeBtn));
        deleteBtn.addEventListener('click', del.bind(null, hitsInfo));

        allHits.appendChild(hitsInfo);

        fields.forEach(f => f.value = '');
    }

    function like(e) {
        let [text, numLikes] = totalLikes.textContent.split(': ');
        numLikes = Number(numLikes);
        numLikes++;

        totalLikes.textContent = text + ': ' + numLikes;
        e.target.disabled = true;
    }

    function save(hitsInfo, saveBtn, likeBtn) {
        saveBtn.remove();
        likeBtn.remove();
        savedHits.appendChild(hitsInfo);
    }

    function del(hitsInfo) {
        hitsInfo.remove();
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