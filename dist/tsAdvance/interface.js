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
let account1 = {
    name: 'Lala',
    country: 'China',
    petName: 'Leo',
    petType: 'Cat',
    petBirth: '12/12/2002',
    cfName: 'Kim',
    cfCountry: 'US'
};
