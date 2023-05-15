"use strict";
// -- Super --
class Employee9 {
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
class IT9 extends Employee9 {
    constructor(name, salary) {
        super(name, 'IT', salary);
    }
}
const emp8 = new IT9('Lisa', 9);
emp8.showDetail();
