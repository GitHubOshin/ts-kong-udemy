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
