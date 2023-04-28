const myFriends: string[] = []
const myPets: string[] = ['Dog', 'Cat']

console.log(myPets[0])
console.log(myPets.length)

// Array & TypeAliases

type BestFriend = {
  name: string
  readonly birthday: string
  contact: string
  favouriteFood?: string
}

const bestFriends: BestFriend[] = []
bestFriends.push({ name: 'Sayo', birthday: '01/01/2001', contact: 'Instagram' })
