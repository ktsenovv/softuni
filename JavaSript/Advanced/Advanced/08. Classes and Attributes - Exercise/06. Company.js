class Company {
    constructor() {
        this.departments = {
            bestDepartment: '',
            bestSalary: 0
        };
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || salary < 0 || !position || !department) {
            throw Error('Invalid input!');
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push({ name, position, salary });

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        for (let department in this.departments) {
            let averageSalary = 0;
            for (let employee in this.departments[department]) {
                averageSalary += this.departments[department][employee].salary;
            }

            averageSalary = averageSalary / this.departments[department].length;
            if (this.departments.bestSalary < averageSalary) {
                this.departments.bestDepartment = department;
                this.departments.bestSalary = averageSalary;
            }
        }

        this.departments[this.departments.bestDepartment].sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name);
        })

        let result = `Best Department is: ${this.departments.bestDepartment}\nAverage salary: ${this.departments.bestSalary.toFixed(2)}\n`;
        this.departments[this.departments.bestDepartment].forEach((employee) => {
            result += `${employee.name} ${employee.salary} ${employee.position}\n`;
        })

        return result.trim();
    }
};

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());