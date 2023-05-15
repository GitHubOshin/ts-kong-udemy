"use strict";
// -- Generic Class --
// Normal Class
class Stack1 {
    constructor() {
        this.items = [];
    }
    pushElement(element) {
        this.items.push(element);
    }
}
// Generic Class
class Stack2 {
    constructor() {
        this.items = [];
    }
    pushElement(element) {
        this.items.push(element);
    }
}
const stack1 = new Stack1();
const stack2 = new Stack2();
stack1.pushElement('Cola');
stack1.pushElement('Pepsi');
stack2.pushElement(200);
stack2.pushElement(550);
console.log(stack1);
console.log(stack2);
