class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  addFirst(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
  }

  getHead() {
    return this.head.data;
  }
}
