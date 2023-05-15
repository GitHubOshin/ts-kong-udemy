"use strict";
// -- Generic Constraints --
function mergeObj1(param1, param2) {
    return Object.assign(Object.assign({}, param1), param2);
}
console.log(mergeObj1({ name: 'Our life, Our rice', price: 500 }, { colours: ['Red', 'White', 'orange'] }));
