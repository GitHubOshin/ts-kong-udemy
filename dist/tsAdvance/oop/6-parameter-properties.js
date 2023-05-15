'use strict';
// -- Parameter Properties --
class Employee7 {
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
const emp7 = new Employee7('Cat Tung', 'Eng Teacher', 20);
console.log(emp7.Salary);
emp7.Salary = 100;
emp7.showDetail();
console.log(emp7.Salary);
