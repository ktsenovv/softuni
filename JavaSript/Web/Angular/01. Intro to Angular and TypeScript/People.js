var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Eployee = /** @class */ (function () {
    function Eployee(name, age) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }
    Eployee.prototype.work = function () {
        var currentTask = this.tasks.shift();
        this.tasks.push(currentTask);
        console.log(this.name + currentTask);
    };
    Eployee.prototype.collectSalary = function () {
        console.log("".concat(this.name, " received $").concat(this.salary, " this month."));
    };
    Eployee.prototype.getSalary = function () {
        return this.salary;
    };
    return Eployee;
}());
var Junior = /** @class */ (function (_super) {
    __extends(Junior, _super);
    function Junior(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.tasks.push(' is working on simple task.');
        return _this;
    }
    return Junior;
}(Eployee));
var Senior = /** @class */ (function (_super) {
    __extends(Senior, _super);
    function Senior(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.tasks.push(' is working on a complicated task.');
        _this.tasks.push(' is taking time off work.');
        _this.tasks.push(' is supervising junior workers');
        return _this;
    }
    return Senior;
}(Eployee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.divident = 0;
        _this.tasks.push(' scheduled a meeting.');
        _this.tasks.push(' is preparing a quarterly meeting.');
        return _this;
    }
    Manager.prototype.getSalary = function () {
        return this.salary + this.divident;
    };
    return Manager;
}(Eployee));
var junior = new Junior('Alice', 25);
var senior = new Senior('Bob', 35);
var manager = new Manager('Carol', 45);
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
