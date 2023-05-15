// --  Static Method --

class Company2 {
  public static companyName: string = 'ABC'
  public static founder: string = 'Charlie'
  public static employeesList: Employee12[] = []

  static showComanyName() {
    console.log(`Comany name: ${this.companyName}`)
    for (const person of this.employeesList) {
      console.log(person)
    }
  }
}

class Employee12 {
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

class IT12 extends Employee12 {
  constructor(name: string, salary: number) {
    super(name, 'IT', salary)
  }
}

const emp1201 = new IT12('Lisa', 9)
const emp1202 = new IT12('Cat Tung', 20)
Company2.employeesList.push(emp1201)
Company2.employeesList.push(emp1202)
Company2.showComanyName()
