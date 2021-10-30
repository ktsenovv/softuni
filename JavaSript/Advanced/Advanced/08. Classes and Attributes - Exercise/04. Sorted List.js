class List {
    constructor() {
        this.data = [];
        this.size = this.data.length;
    }

    add(num) {
        if (typeof(num) != 'number') {
            return
        }
        
        this.data.push(num);
        this.data.sort((a, b) => a - b);
        this.size++;
    }

    remove(index) {
        if (typeof(index) != 'number' || index < 0 || index > this.data.length - 1) {
            return;
        }

        this.data.splice(index, 1);
        this.data.sort((a, b) => a - b);
        this.size--;
    }

    get(index) {
        if (typeof(index) != 'number' || index < 0 || index > this.data.length - 1) {
            return;
        }

        return this.data[index];
    }
};

let list = new List();
list.add(7);
list.add(6);
list.add(5);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log('Size: ' + list.size);