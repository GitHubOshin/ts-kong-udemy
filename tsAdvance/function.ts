// void

function sayHi(): void {
  console.log('Hi')
}

sayHi()

// parameter

function myName(name: string) {
  console.log(`Hi! My name's ${name}`)
}

myName('Lilo')

// return

function myPet(): string {
  return `My pet is a cat. Her name is 'Mali'`
}

console.log(myPet())

// Parameter & Return

function evenOrOdd(n: number): string {
  if (n % 2 === 0) {
    return 'Even number'
  } else {
    return 'Odd number'
  }
}

console.log(evenOrOdd(8))

// Arrow Function

const sumNumber = (a: number, b: number): number => {
  return a + b
}

console.log(sumNumber(2, 2))

// Default Parameter

const familyMember = (firstName: string, lastName: string = 'Mamuangsuk') => {
  console.log(`Name: ${firstName} Lastname: ${lastName}`)
}

familyMember('Whasoo')
familyMember('Jisoo', 'Kim')

// Rest Parameter

function total1(a: number, b: number, c: number): number {
  return a + b + c
}

console.log(total1(2, 3, 7))

function total2(...numbers: number[]) {
  return numbers.reduce((arr, curr) => {
    return arr + curr
  }, 0)
}

console.log(total2(2, 5, 7, 10, 1))

// Array Destructuring

const colours: string[] = ['rojo', 'verde', 'azul']
const [red, green, blue] = colours

// Object Destructuring

const avatarFriends = {
  cat: 'John',
  hamster: 'Kman',
  dog: 'Ngaw'
}

const { cat, hamster, dog } = avatarFriends
console.log(cat, hamster, dog)
