"use strict";
// -- Interface --
const product1 = {
    code: 9001,
    name: 'Summer Candy Skirt',
    price: 1200
};
const person1 = {
    name: 'Peter',
    age: 1,
    info() {
        console.log(`Last update: ${new Date().toLocaleTimeString()}`);
    }
};
// person1.name = 'Wendy'
// console.log(person1.info())
// console.log(person1)
