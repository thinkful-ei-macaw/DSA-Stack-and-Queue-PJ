'use strict';

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

/*
              Stack
        pop()   4   <-- Last out
                3
                2
--> First in    1   push();
*/


class Stack {
  constructor() {
    this.top = null;
  }

  //O(1) time complexity
  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }

  //O(1)
  pop(data) {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function main() {

}

main();