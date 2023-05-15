"use strict";
// -- Generic --
// Number
function getElementNumber(arr, count) {
    return arr.slice(arr.length - count);
}
// String
function getElementString(arr, count) {
    return arr.slice(arr.length - count);
}
// Boolean
function getElementBoolean(arr, count) {
    return arr.slice(arr.length - count);
}
const arrNum = [10, 20, 30, 40];
const arrStr = ['Tung Cat', 'Kman', 'Oshin', 'Icey'];
const arrBoo = [true, false, true, false];
console.log(getElementNumber(arrNum, 2));
console.log(getElementString(arrStr, 2));
console.log(getElementBoolean(arrBoo, 2));
