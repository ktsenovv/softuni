class KeyValuePair<T, U> {
    private key: T;
    private val: U;

    public setKeyValue(key: T, value: U) {
        this.key = key;
        this.val = value;
    }

    public display() {
        console.log(`key = ${this.key}, value = ${this.val}`);
    }
}

let kvp = new KeyValuePair<number, string>();
kvp.setKeyValue(1, 'Steve');
kvp.display();