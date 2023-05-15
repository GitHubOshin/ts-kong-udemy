// -- InstandOf Narrowing --

class User {
  constructor(username: string) {}
}

class Employee01 {
  constructor(name: string) {}
}

function printObj(obj: Employee01 | User) {
  if (obj instanceof Employee01) {
    console.log(`Employee Obj`)
  } else {
    console.log(`User Obj`)
  }
}

printObj(new User('Pepsi'))
