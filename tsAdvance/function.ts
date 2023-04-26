// void

function sayHi(): void {
  console.log('Hi')
}

sayHi()

// parameter

function myName(name: string) {
  console.log(`Hi! My name's ${name}`);
}

myName("Lilo")

// return

function myPet(): string {
  return `My pet is a cat. Her name is 'Mali'`
}

console.log(myPet());

// Parameter & Return 

function sumNumber(n: number): string {
  if (n % 2 === 0) {
    return 'Even number'
  } else {
    return 'Odd number'
  }
}

console.log(sumNumber(8));
