"use strict";
// -- Generic Function --
function getElement(arr, count) {
    return arr.slice(arr.length - count);
}
const arrNum2 = [10, 20, 30, 40];
const arrStr2 = ['Ngaw', 'Win', 'Oshin', 'Afolasayo'];
const arrBool2 = [true, false, true, false];
console.log(getElement(arrNum2, 2));
console.log(getElement(arrStr2, 2));
console.log(getElement(arrBool2, 2));
