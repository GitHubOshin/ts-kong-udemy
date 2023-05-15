// -- Generic Function --

function getElement<T>(arr: T[], count: number) {
  return arr.slice(arr.length - count)
}

const arrNum2: number[] = [10, 20, 30, 40]
const arrStr2: string[] = ['Ngaw', 'Win', 'Oshin', 'Afolasayo']
const arrBool2: boolean[] = [true, false, true, false]

console.log(getElement<number>(arrNum2, 2))
console.log(getElement<string>(arrStr2, 2))
console.log(getElement<boolean>(arrBool2, 2))
