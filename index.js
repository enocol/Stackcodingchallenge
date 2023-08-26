class Stack {
  constructor() {
    this.stack = [];
  }

  pop() {
    return this.stack.length === 0 ? null : this.stack.pop();
  }

  push(number) {
    this.stack.push(number);
  }

  min() {
    let min = this.stack[0];
    if (this.stack.length === 0) {
      return null;
    } else {
      for (let i = 1; i < this.stack.length; i++) {
        if (this.stack[i] < min) min = this.stack[i];
      }
    }
    return min;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.pop());
console.log(stack);

const min = stack.min();
