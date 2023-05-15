"use strict";
// --  Static Property --
class Company {
}
Company.companyName = 'ABC';
Company.founder = 'Charlie';
Company.employeesList = [];
class Employee11 {
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
class IT11 extends Employee11 {
    constructor(name, salary) {
        super(name, 'IT', salary);
    }
}
const emp11 = new IT11('Lisa', 9);
console.log('Company: ' + Company.companyName);
Company.employeesList.push(emp11);
console.log(Company.employeesList);
