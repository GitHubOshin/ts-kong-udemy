// -- Class & Interface --

interface IReoprt {
  income: number
  reportIncome(): void
}

abstract class Employee14 {
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

class IT13 extends Employee14 implements IReoprt {
  income: number
  constructor(name: string, salary: number) {
    super(name, 'IT', salary)
    this.income = salary
  }
  info(): void {
    console.log(`Program development`)
  }
  reportIncome(): void {
    console.log(`IT income/year: ${this.income * 12} THB/Year`)
  }
}

class Accounting3 extends Employee14 implements IReoprt {
  income: number
  constructor(name: string, salary: number) {
    super(name, 'IT', salary)
    this.income = salary
  }
  info(): void {
    console.log(`Account management`)
  }
  reportIncome(): void {
    console.log(`AM income/year: ${this.income * 12} THB/Year`)
  }
}

const emp001 = new Accounting3('Lisa', 9)
const emp002 = new Accounting3('Cat Tung', 20)

emp001.reportIncome()
