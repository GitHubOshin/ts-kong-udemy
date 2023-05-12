'use strict'
// -- Class & Object --

class Employee {}

const epm1 = new Employee()
console.log(epm1)

// -- Constructor --

class Employee2 {
  constructor() {
    console.log('Hello, Employee2')
  }
}

const emp2 = new Employee2()

// -- Property --

class Employee3 {
  name: string
  department: string
  constructor(name: string, department: string, salary: number) {
    this.name = name
    this.department = department
    this.salary = salary
  }
}

const emp3 = new Employee3('Kong', 'IT', 30)
