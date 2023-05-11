"use strict";
// -- Union Type --
let age;
age = 10;
console.log(age);
age = 'Ten';
console.log(age);
let coordinates;
coordinates = { x: 5, y: 2 };
console.log(coordinates);
coordinates = { lat: 1, long: 8 };
console.log(coordinates);
// -- Union Type & Function --
function helloFreind(personName) {
    if (typeof personName === 'string') {
        console.log(`Hello, ${personName}!`);
    }
    else {
        personName.forEach((element) => {
            console.log(`Hello, ${element}!`);
        });
    }
}
helloFreind('Oshin');
helloFreind(['Kman', 'Ngaw', 'Icey']); // Hello, Kman! Hello, Ngaw! Hello, Icey!
// -- Literals Type --
function shutdown(answer) {
    if (answer === 'yes' || answer === 'no') {
        console.log(`result: ${answer}`);
    }
    else {
        console.error(`Error: The answer must be "yes" or "no" only!`);
    }
}
// shutdown('Hi') // Error: The answer must be "yes" or "no" only!
shutdown('yes');
