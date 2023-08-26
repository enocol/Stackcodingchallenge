class Stack {
  constructor() {
    this.stack = [];
  }

  pop() {
    return this.stack.length === 0 ? null : this.stack.pop();

    // if (this.stack.length === 0) {
    //   return null;
    // } else {
    //   this.stack.pop();
    // }
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

const min = stack.min();
console.log(min);
