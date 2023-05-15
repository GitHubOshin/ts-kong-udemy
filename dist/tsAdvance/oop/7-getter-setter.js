"use strict";
// -- Getter Method & Setter Method --
class Employee6 {
    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    showDetail() {
        console.log(`Name: ${this.name} | Department: ${this.department} | Salary: ${this.salary} THB`);
    }
    // setSalary(newSalary: number) {
    set Salary(newSalary) {
        this.salary = newSalary;
    }
    // getSalary(): number {
    get Salary() {
        return this.salary;
    }
}
const emp6 = new Employee6('Lala', 'IT', 20);
// console.log(emp6.getSalary())
console.log('Salary: ' + emp6.Salary);
// emp6.setSalary(5)
emp6.Salary = 5;
// console.log(emp6.getSalary())
console.log('Salary: ' + emp6.Salary);
