function sortedList() {
    let data = [];
    return {
        add(element) {
            element = Number(element);
            data.push(element);
            this.size = data.length;
            data.sort((a, b) => a - b);
        },
        remove(index) {
            if (index >= 0 && index < data.length) {
                data.splice(index, 1);
                this.size = data.length;
                data.sort((a, b) => a - b);
            }
        },
        get(index) {
            if (index >= 0 && index < data.length) {
                data.sort((a, b) => a - b);
                return data[index];
            }
        },
        size: 0
    };
}

let list = sortedList();
list.add(7);
list.add(6);
list.add(5);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list);