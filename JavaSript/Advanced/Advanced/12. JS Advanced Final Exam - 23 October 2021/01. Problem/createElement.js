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