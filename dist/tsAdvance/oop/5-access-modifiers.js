"use strict";
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
