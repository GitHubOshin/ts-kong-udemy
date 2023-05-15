"use strict";
// -- Abstract Class & Method --
class Employee13 {
    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    showDetail() {
        console.log(`Name: ${this.name} | Department: ${this.department} | Salary: ${this.salary} THB`);
    }
    set Salary(newSalary) {
        this.salary = newSalary;
    }
    get Salary() {
        return this.salary;
    }
}
class Accounting2 extends Employee13 {
    constructor(name, salary) {
        super(name, 'IT', salary);
    }
    info() {
        console.log(`Account management`);
    }
}
const emp01 = new Accounting2('Lisa', 9);
const emp02 = new Accounting2('Cat Tung', 20);
emp01.info();
