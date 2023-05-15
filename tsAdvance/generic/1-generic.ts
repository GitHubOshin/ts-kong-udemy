// -- Generic --

// Number
function getElementNumber(arr: number[], count: number) {
  return arr.slice(arr.length - count)
}

const arrNum: number[] = [10, 20, 30, 40]

console.log(getElementNumber(arrNum, 2))
