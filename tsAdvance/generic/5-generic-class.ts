// -- Generic Class --

// Normal Class
class Stack1 {
  private items: string[] = []
  pushElement(element: string) {
    this.items.push(element)
  }
}

const stack1 = new Stack1()

stack1.pushElement('Cola')
stack1.pushElement('Pepsi')

console.log(stack1)
