class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export default class Stack {
  constructor() {
    this.head = null;
  }

  push(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
  }

  pop() {
    const node = this.head;

    if (this.head) {
      this.head = this.head.next;
      return node.data;
    }
    return null;
  }

  toArray() {
    const array = [];
    let current = this.head;

    while (current) {
      array.unshift(current.data);
      current = current.next;
    }

    return array;
  }

  getHead() {
    return this.head.data;
  }
}
