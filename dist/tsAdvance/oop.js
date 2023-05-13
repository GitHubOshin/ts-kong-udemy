'use strict';
// -- Class & Object --
class Employee {
}
const epm1 = new Employee();
console.log(epm1);
// -- Constructor --
class Employee2 {
    constructor() {
        console.log('Hello, Employee2');
    }
}
const emp2 = new Employee2();
// -- Property | Readonly Property --
class Employee3 {
    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
}
const emp3 = new Employee3('Kong', 'IT', 30);
// -- Access Modifiers --
class Employee4 {
    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
}
const emp4 = new Employee4('Nung Jin', 'IT', 10);
console.log(emp4);
// emp4.salary = 20 // Property 'salary' is private and only accessible within class 'Employee4'.
// --  Method --
class Employee5 {
    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    showDetail() {
        console.log(`Name: ${this.name} | Department: ${this.department} | Salary: ${this.salary} THB`);
    }
}
const emp5 = new Employee5('Meow', 'IT', 2);
emp5.showDetail();
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
