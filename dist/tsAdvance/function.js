"use strict";
// void
function sayHi() {
    console.log('Hi');
}
sayHi();
// parameter
function myName(name) {
    console.log(`Hi! My name's ${name}`);
}
myName('Lilo');
// return
function myPet() {
    return `My pet is a cat. Her name is 'Mali'`;
}
console.log(myPet());
// Parameter & Return
function evenOrOdd(n) {
    if (n % 2 === 0) {
        return 'Even number';
    }
    else {
        return 'Odd number';
    }
}
console.log(evenOrOdd(8));
// Arrow Function
const sumNumber = (a, b) => {
    return a + b;
};
console.log(sumNumber(2, 2));
// Default Parameter
const familyMember = (firstName, lastName = 'Mamuangsuk') => {
    console.log(`Name: ${firstName} Lastname: ${lastName}`);
};
familyMember('Whasoo');
familyMember('Jisoo', 'Kim');
// Rest Parameter
function total1(a, b, c) {
    return a + b + c;
}
console.log(total1(2, 3, 7));
function total2(...numbers) {
    return numbers.reduce((arr, curr) => {
        return arr + curr;
    }, 0);
}
console.log(total2(2, 5, 7, 10, 1));
// Array Destructuring
const colours = ['rojo', 'verde', 'azul'];
const [red, green, blue] = colours;
// Object Destructuring
const avatarFriends = {
    cat: 'John',
    hamster: 'Kman',
    dog: 'Ngaw'
};
const { cat, hamster, dog } = avatarFriends;
console.log(cat, hamster, dog);
function sayHiToFriend(name) {
    if (!name) {
        return 'Hello Friend!';
    }
    if (typeof name === 'string') {
        return `Hello ${name}`;
    }
    throw new Error('TypeError');
}
console.log(sayHiToFriend());
console.log(sayHiToFriend('Oshin'));
function sumApple(newApple, oldApple) {
    if (typeof newApple === 'number' && typeof oldApple === 'number') {
        return newApple + oldApple;
    }
    if (typeof newApple === 'string' && typeof oldApple === 'string') {
        return `New apple(s): ${newApple} + Old apple(s): ${oldApple} | All = ${parseInt(newApple) + parseInt(oldApple)}`;
    }
    throw new Error('TypeError');
}
console.log(sumApple(2, 2));
console.log(sumApple('6', '1'));
