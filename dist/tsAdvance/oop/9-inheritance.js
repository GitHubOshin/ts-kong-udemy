"use strict";
// -- Inheritance --
class Employee8 {
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
class IT extends Employee8 {
}
class Accounting extends Employee8 {
}
const empIT = new IT('Em', 'IT', 5);
console.log(empIT);
const empAcc = new Accounting('Ac', 'Accounting', 2);
console.log(empAcc);
