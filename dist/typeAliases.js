'use strict'
let closeFriend1 = {
  id: 1,
  name: 'John',
  gender: 'Male',
  contact: 'HT'
}

let closeFriend2 = {
  id: 2,
  name: 'Sayo',
  contact: 'HT'
}

// closeFriend2.id = 4 // Cannot assign to 'id' because it is a read-only property.
closeFriend2.name = 'Kman'
console.log(closeFriend1)
