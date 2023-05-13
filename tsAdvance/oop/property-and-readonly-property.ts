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
