"use strict";
// -- Generic Multiple Type --
function merge(param1, param2) {
    console.log(`${param1} ${param2}`);
}
function mergeObj(param1, param2) {
    return Object.assign(Object.assign({}, param1), param2);
}
merge('Kane', true);
merge(true, true);
const product = { name: 'Our life, Our rice', price: 500 };
const description = { colours: ['Red', 'White', 'orange'] };
console.log(mergeObj(product, description));
