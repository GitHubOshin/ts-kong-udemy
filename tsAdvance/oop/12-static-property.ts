// --  Static Property --

class Company {
  public static companyName: string = 'ABC'
  public static founder: string = 'Charlie'
  public static employeesList: Employee11[] = []
}

class Employee11 {
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

class IT11 extends Employee11 {
  constructor(name: string, salary: number) {
    super(name, 'IT', salary)
  }
}

const emp11 = new IT11('Lisa', 9)

console.log('Company: ' + Company.companyName)
Company.employeesList.push(emp11)
console.log(Company.employeesList)
