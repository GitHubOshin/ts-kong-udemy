"use strict";
// -- Class & Interface --
class Employee14 {
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
class IT13 extends Employee14 {
    constructor(name, salary) {
        super(name, 'IT', salary);
        this.income = salary;
    }
    info() {
        console.log(`Program development`);
    }
    reportIncome() {
        console.log(`IT income/year: ${this.income * 12} THB/Year`);
    }
}
class Accounting3 extends Employee14 {
    constructor(name, salary) {
        super(name, 'IT', salary);
        this.income = salary;
    }
    info() {
        console.log(`Account management`);
    }
    reportIncome() {
        console.log(`AM income/year: ${this.income * 12} THB/Year`);
    }
}
const emp001 = new Accounting3('Lisa', 9);
const emp002 = new Accounting3('Cat Tung', 20);
emp001.reportIncome();
