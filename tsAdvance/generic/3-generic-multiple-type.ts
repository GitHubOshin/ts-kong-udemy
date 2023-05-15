// -- Generic Multiple Type --

function merge<T, U>(param1: T, param2: U) {
  console.log(`${param1} ${param2}`)
}

function mergeObj<T, U>(param1: T, param2: U) {
  return {
    ...param1,
    ...param2
  }
}

merge<string, boolean>('Kane', true)
merge<boolean, boolean>(true, true)

const product = { name: 'Our life, Our rice', price: 500 }
const description = { colours: ['Red', 'White', 'orange'] }

console.log(mergeObj<object, object>(product, description))
