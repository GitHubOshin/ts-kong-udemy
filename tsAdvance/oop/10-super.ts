// -- Super --
class Employee9 {
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

class IT9 extends Employee9 {
  constructor(name: string, salary: number) {
    super(name, 'IT', salary)
  }
}

const emp8 = new IT9('Lisa', 9)
emp8.showDetail()
