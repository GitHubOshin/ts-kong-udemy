// -- Protected Modifier --

class Employee10 {
  protected companyName: string = 'ABC'
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

class IT10 extends Employee10 {
  constructor(name: string, salary: number) {
    super(name, 'IT', salary)
    console.log(`Company: ${this.companyName}`)
  }
}

const emp9 = new IT10('Lisa', 9)
// emp9.showDetail()
