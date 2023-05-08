// Tuple

const point: [number, string] = [10, 'Pink Card']
console.log(point)
console.log(point[1])
console.log((point[0] = 20))
console.log(point)

// Tuple Lable

const myFriend: [name: string, age: number] = ['Ngaw', 14]

// Tuple Type

type lovelyFriend = [country: string, age: number]

const ngaw: lovelyFriend = ['Vietnam', 14]

console.log(ngaw)
