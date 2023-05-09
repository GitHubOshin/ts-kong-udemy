// -- Interface --

interface Product {
  readonly code: number
  name: string
  colour?: string
  price: number
}

const product1: Product = {
  code: 9001,
  name: 'Summer Candy Skirt',
  price: 1200
}

// -- Interface Method

interface Person {
  name: string
  age: number
  info: () => void
}

const person1: Person = {
  name: 'Peter',
  age: 1,
  info() {
    console.log(`Last update: ${new Date().toLocaleTimeString()}`)
  }
}
// person1.name = 'Wendy'
// console.log(person1.info())
// console.log(person1)
