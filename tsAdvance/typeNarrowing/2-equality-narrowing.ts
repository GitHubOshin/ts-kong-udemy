// -- Equality Narrowing --

function compareValue(x: string | number, y: string | number) {
  if (x === y) {
    console.log('Equal to each other')
  } else {
    console.log('Not equal to each other')
  }
}

compareValue(9, 9)
compareValue(1, '1')
