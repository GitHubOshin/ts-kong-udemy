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

// -- Property | Readonly Property --

class Employee3 {
  readonly name: string
  department: string
  salary: number
  constructor(name: string, department: string, salary: number) {
    this.name = name
    this.department = department
    this.salary = salary
  }
}

const emp3 = new Employee3('Kong', 'IT', 30)

// -- Access Modifiers --

class Employee4 {
  private name: string
  private department: string
  private salary: number
  constructor(name: string, department: string, salary: number) {
    this.name = name
    this.department = department
    this.salary = salary
  }
}

const emp4 = new Employee4('Nung Jin', 'IT', 10)
console.log(emp4)
// emp4.salary = 20 // Property 'salary' is private and only accessible within class 'Employee4'.

// --  Method --

class Employee5 {
  name: string
  department: string
  salary: number
  constructor(name: string, department: string, salary: number) {
    this.name = name
    this.department = department
    this.salary = salary
  }
  showDetail() {
    console.log(
      `Name: ${this.name} | Department: ${this.department} | Salary: ${this.salary} THB`
    )
  }
}

const emp5 = new Employee5('Meow', 'IT', 2)
emp5.showDetail()
