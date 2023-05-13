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
