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
myName("Lilo");
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
