// -- Discriminated Unions --

interface Rectangle {
  width: number
  height: number
  type: 'Rectangle'
}

interface Triangle {
  base: number
  height: number
  type: 'Triangle'
}

type Shape = Rectangle | Triangle

function calculateArea(shape: Shape) {
  switch (shape.type) {
    case 'Rectangle':
      return `Result = ${shape.width * shape.height}`
    case 'Triangle':
      return `Result = ${0.5 * shape.base * shape.height}`
    default:
      return new Error('There is something wrong.')
  }
}

console.log(calculateArea({ width: 9, height: 9, type: 'Rectangle' }))
