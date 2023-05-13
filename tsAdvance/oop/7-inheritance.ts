// -- Inheritance --

class Employee8 {
  constructor(
    private name: string,
    private department: string,
    private salary: number
  ) {}
  showDetail() {
    console.log(
      `Name: ${this.name} | Department: ${this.department} | Salary: ${this.salary} THB`
    )
  }
  set Salary(newSalary: number) {
    this.salary = newSalary
  }
  get Salary(): number {
    return this.salary
  }
}

class IT extends Employee8 {}
class Accounting extends Employee8 {}

const empIT = new IT('Em', 'IT', 5)
console.log(empIT)
const empAcc = new Accounting('Ac', 'Accounting', 2)
console.log(empAcc)
