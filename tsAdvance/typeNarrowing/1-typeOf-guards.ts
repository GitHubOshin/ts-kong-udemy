// -- TypeOf Guards --

function truncate(value: string | number, length: number) {
  if (typeof value === 'number') {
    return value.toString().slice(0, length)
  }
  return value.slice(0, length)
}

console.log(truncate('Meow Meow', 3))
console.log(truncate(8899, 3))
