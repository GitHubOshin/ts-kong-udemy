// -- Generic Constraints --

function mergeObj1<T extends object, U extends object>(param1: T, param2: U) {
  return {
    ...param1,
    ...param2
  }
}

console.log(
  mergeObj1(
    { name: 'Our life, Our rice', price: 500 },
    { colours: ['Red', 'White', 'orange'] }
  )
)
