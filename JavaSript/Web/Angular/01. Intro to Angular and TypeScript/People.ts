abstract class Eployee {
    public name: string;
    public age: number;
    public salary: number;
    public tasks: string[];

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }

    public work(): void {
        const currentTask: string = this.tasks.shift()!;
        this.tasks.push(currentTask);
        console.log(this.name + currentTask);
    }

    public collectSalary(): void {
        console.log(`${this.name} received $${this.salary} this month.`);
    }

    public getSalary(): number {
        return this.salary;
    }
}

class Junior extends Eployee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(' is working on simple task.');
    }
}

class Senior extends Eployee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(' is working on a complicated task.');
        this.tasks.push(' is taking time off work.');
        this.tasks.push(' is supervising junior workers');
    }
}

class Manager extends Eployee {
    public divident: number;

    constructor(name: string, age:number) {
        super(name, age);
        this.divident = 0;
        this.tasks.push(' scheduled a meeting.');
        this.tasks.push(' is preparing a quarterly meeting.');
    }

    public getSalary(): number {
        return this.salary + this.divident;
    }
}

const junior = new Junior('Alice', 25);
const senior = new Senior('Bob', 35);
const manager = new Manager('Carol', 45);

console.log('- Junior -');

junior.work();
junior.salary = junior.getSalary() + 100;
junior.work();
junior.salary = junior.getSalary() + 100;
junior.collectSalary();

console.log('\n- Senior -');

senior.work();
senior.salary = senior.getSalary() + 300;
senior.work();
senior.salary = senior.getSalary() + 300;
senior.work();
senior.salary = senior.getSalary() + 300;
senior.collectSalary();

console.log('\n- Manager -');

manager.work();
manager.salary = manager.getSalary() + 1000;
manager.work();
manager.salary = manager.getSalary() + 1000;
manager.collectSalary();