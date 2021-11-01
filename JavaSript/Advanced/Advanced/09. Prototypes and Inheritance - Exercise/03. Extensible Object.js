function extensibleObject() {
    const obj = {
        extend(template) {
            for (let prop of Object.keys(template)) {
                if (typeof(template[prop]) === 'function') {
                    Object.getPrototypeOf(obj)[prop] = template[prop];
                } else {
                    obj[prop] = template[prop];
                }
            }
        }
    };

    return obj;
}

const myObj = extensibleObject();

console.log(myObj);

const template = {
    extensionMethod: function () {},
    extensionProperty: 'someString'
}

myObj.extend(template);

console.log(myObj);