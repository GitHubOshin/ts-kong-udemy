"use strict";
// --  Static Method --
class Company2 {
    static showComanyName() {
        console.log(`Comany name: ${this.companyName}`);
        for (const person of this.employeesList) {
            console.log(person);
        }
    }
}
Company2.companyName = 'ABC';
Company2.founder = 'Charlie';
Company2.employeesList = [];
class Employee12 {
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
class IT12 extends Employee12 {
    constructor(name, salary) {
        super(name, 'IT', salary);
    }
}
const emp1201 = new IT12('Lisa', 9);
const emp1202 = new IT12('Cat Tung', 20);
Company2.employeesList.push(emp1201);
Company2.employeesList.push(emp1202);
Company2.showComanyName();
