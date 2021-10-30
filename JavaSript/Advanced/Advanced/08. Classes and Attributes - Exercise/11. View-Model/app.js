class Textbox {
    constructor(selector, regex) {
        this._elements = document.querySelectorAll(selector);
        this._value = this._elements[0].value;
        this._invalidSymbols = regex;
        this.onInput();
    }

    get elements() {
        return this._elements;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
        for (let element of this.elements) {
            element.value = value;
        }
    }

    onInput() {
        for (let element of this.elements) {
            element.addEventListener('input', (event) => {
                this.value = event.target.value;
            });
        }
    }

    isValid() {
        return !this._invalidSymbols.test(this.value);
    }
}

let textbox = new Textbox('.textbox', /[^a-zA-Z0-9]/);
let inputs = document.querySelectorAll('.textbox');

inputs.forEach(x => x.addEventListener('input', function () { console.log(x.value) }));