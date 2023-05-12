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