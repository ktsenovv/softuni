abstract class Melon {
    public weight: number;
    public melonSort: string;

    constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
    }

    public abstract toString(): string;
}

class Watermelon extends Melon {
    public elementIndex: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
    }

    public get elemelonElementIndex(): number {
        return this.elementIndex;
    }

    public toString(): string {
        return `Element: Water\nSort: ${this.melonSort}\nElement Index: ${this.elemelonElementIndex}`;
    }
}

class Firemelon extends Melon {
    public elementIndex: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
    }

    public get elemelonElementIndex(): number {
        return this.elementIndex;
    }

    public toString(): string {
        return `Element: Fire\nSort: ${this.melonSort}\nElement Index: ${this.elemelonElementIndex}`;
    }
}

class Earthmelon extends Melon {
    public elementIndex: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
    }

    public get elemelonElementIndex(): number {
        return this.elementIndex;
    }

    public toString(): string {
        return `Element: Earth\nSort: ${this.melonSort}\nElement Index: ${this.elemelonElementIndex}`;
    }
}

class Airmelon extends Melon {
    public elementIndex: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
    }

    public get elemelonElementIndex(): number {
        return this.elementIndex;
    }

    public toString(): string {
        return `Element: Air\nSort: ${this.melonSort}\nElement Index: ${this.elemelonElementIndex}`;
    }
}

class Melolemonmelon extends Firemelon {
    public element: string[];

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.element = [`Water`, `Fire`, `Earth`, `Air`]
    }

    public morph(): void {
        let e = this.element.shift();
        if (e) {
            this.element.push(e);
        }
    }

    public toString(): string {
        return `Element: ${this.element[0]}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
}

// Test normal functionality
console.log('- Watermelon -');
let watermelon: Watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());

// Test morph functionality
console.log('\n- Watermelon -');
let anymelon: Melolemonmelon = new Melolemonmelon(12.5, "Kingsize");
console.log(anymelon.toString());

anymelon.morph(); // Change Melon

console.log('\n- Firemelon -');
console.log(anymelon.toString());

anymelon.morph(); // Change Melon

console.log('\n- Earthmelon -');
console.log(anymelon.toString());

anymelon.morph(); // Change Melon

console.log('\n- Airmelon -');
console.log(anymelon.toString());

anymelon.morph(); // Change Melon

console.log('\n- Watermelon -');
console.log(anymelon.toString());