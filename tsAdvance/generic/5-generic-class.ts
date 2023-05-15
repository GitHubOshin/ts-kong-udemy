// -- Generic Class --

// Normal Class
class Stack1 {
  private items: string[] = []
  pushElement(element: string) {
    this.items.push(element)
  }
}

// Generic Class
class Stack2<T> {
  private items: T[] = []
  pushElement(element: T) {
    this.items.push(element)
  }
}

const stack1 = new Stack1()
const stack2 = new Stack2<number>()

stack1.pushElement('Cola')
stack1.pushElement('Pepsi')

stack2.pushElement(200)
stack2.pushElement(550)

console.log(stack1)

console.log(stack2)
