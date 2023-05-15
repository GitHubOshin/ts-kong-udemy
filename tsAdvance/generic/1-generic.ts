// -- Generic --

// Number
function getElementNumber(arr: number[], count: number) {
  return arr.slice(arr.length - count)
}

// String
function getElementString(arr: string[], count: number) {
  return arr.slice(arr.length - count)
}

// Boolean
function getElementBoolean(arr: boolean[], count: number) {
  return arr.slice(arr.length - count)
}

const arrNum: number[] = [10, 20, 30, 40]
const arrStr: string[] = ['Tung Cat', 'Kman', 'Oshin', 'Icey']
const arrBoo: boolean[] = [true, false, true, false]

console.log(getElementNumber(arrNum, 2))
console.log(getElementString(arrStr, 2))
console.log(getElementBoolean(arrBoo, 2))
