/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */
  //PUSH FOR STACK IS TO ADD AT THE TOP(corrected by DL)
  push(val) {
    let newNode = new Node(val);
    if (this.first === null) {
      this.first = newNode;
      this.last = this.first;
    }
    else {
      let currentNode = this.first
      this.first = newNode;
      this.first.next = currentNode;
    }
    this.size += 1;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size === 0) {
      throw 'Error';
    }
    if (this.first === this.last) {
      let popNode = this.first;
      this.first = null;
      this.last = null;
      this.size += -1;
      return popNode.val;
    }
    else {
      let popNode = this.first;
      this.first = popNode.next;
      this.size += -1;
      return popNode.val;
    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (!this.first) {
      throw 'Error';
    }
    else {
      let peekNode = this.first
      return peekNode.val;
    }
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (!this.first) {
      return true;
    }
    else {
      return false;
    }
  }
}

module.exports = Stack;
