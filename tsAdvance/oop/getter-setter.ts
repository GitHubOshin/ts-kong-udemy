// -- Getter Method & Setter Method --

class Employee6 {
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
  // setSalary(newSalary: number) {
  set Salary(newSalary: number) {
    this.salary = newSalary
  }
  // getSalary(): number {
  get Salary(): number {
    return this.salary
  }
}

const emp6 = new Employee6('Lala', 'IT', 20)
// console.log(emp6.getSalary())
console.log('Salary: ' + emp6.Salary)
// emp6.setSalary(5)
emp6.Salary = 5
// console.log(emp6.getSalary())
console.log('Salary: ' + emp6.Salary)
