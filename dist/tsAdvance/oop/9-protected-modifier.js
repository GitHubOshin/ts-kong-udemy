"use strict";
// -- Protected Modifier --
class Employee10 {
    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
        this.companyName = 'ABC';
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
class IT10 extends Employee10 {
    constructor(name, salary) {
        super(name, 'IT', salary);
        console.log(`Company: ${this.companyName}`);
    }
}
const emp9 = new IT10('Lisa', 9);
// emp9.showDetail()
