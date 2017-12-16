class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export default class LinkedList {
  constructor() {
    this.head = new Node();
    this.tail = this.head;
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

  getHead() {
    return this.head.data;
  }

  getTail() {
    return this.tail.data;
  }
}
