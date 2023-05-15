// Generic Default Type

class Stack3<T = number> {
  private items: T[] = []
  pushElement(element: T) {
    this.items.push(element)
  }
}
const stack3 = new Stack3()
stack2.pushElement(550)
console.log(stack2)
