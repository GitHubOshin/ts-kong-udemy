// - How to create an object -

const personObj1: { name: string; age: number } = { name: 'Me', age: 10 }

const personObj2 = {
  name: 'Justin',
  age: 2,
  address: "Uk"
}

// - Function that gets obj as a property -

function showDetail1(data: { name: string; age: number }) {
  console.log(`Name: ${data.name}, Age: ${data.age}`)
}

showDetail1(personObj2) // OUTPUT -> Name: Juatin, Age: 2

// - Excess Properties Check -

function showDetail2(data: { name: string; age: number }) {
  console.log(`Name: ${data.name}, Age: ${data.age}`)
}

showDetail2({personObj2}) // Put obj inside {}

// - Func returns obj -

function randomPosition():{lat:number, long:number} {
  return {
    lat: Math.random(),
    long: Math.random()
  }
}

console.log(randomPosition());
