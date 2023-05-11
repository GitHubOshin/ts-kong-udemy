// -- Union Type --

let age: number | string
age = 10
console.log(age)
age = 'Ten'
console.log(age)

// -- Union Type & Type Aliases --

type Point = {
  x: number
  y: number
}

type Position = {
  lat: number
  long: number
}

let coordinates: Point | Position
coordinates = { x: 5, y: 2 }
console.log(coordinates)
coordinates = { lat: 1, long: 8 }
console.log(coordinates)

// -- Union Type & Function --

function helloFreind(personName: string | string[]): void {
  if (typeof personName === 'string') {
    console.log(`Hello, ${personName}!`)
  } else {
    personName.forEach((element) => {
      console.log(`Hello, ${element}!`)
    })
  }
}

helloFreind('Oshin')
helloFreind(['Kman', 'Ngaw', 'Icey']) // Hello, Kman! Hello, Ngaw! Hello, Icey!

// -- Literals Type --

function shutdown(answer: 'yes' | 'no') {
  if (answer === 'yes' || answer === 'no') {
    console.log(`result: ${answer}`)
  } else {
    console.error(`Error: The answer must be "yes" or "no" only!`)
  }
}

// shutdown('Hi') // Error: The answer must be "yes" or "no" only!
shutdown('yes')

// --  Template Literals Type --

type vertical = 'top' | 'middle' | 'bottom'
type horizontal = 'left' | 'center' | 'right'

type alignment = `${vertical} - ${horizontal}`
