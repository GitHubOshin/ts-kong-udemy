// -- Abstract Class & Method --

abstract class Employee13 {
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
  abstract info(): void
}

class Accounting2 extends Employee13 {
  constructor(name: string, salary: number) {
    super(name, 'IT', salary)
  }
  info(): void {
    console.log(`Account management`)
  }
}

const emp01 = new Accounting2('Lisa', 9)
const emp02 = new Accounting2('Cat Tung', 20)
emp01.info()
