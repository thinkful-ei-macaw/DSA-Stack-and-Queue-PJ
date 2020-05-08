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
  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }

  peek() {
    const node = this.top;
    return node;
  }

  isEmpty() {
    if ((this.top === null)) {
      return true;
    }

    return false;
  }

  display() {
    let arr = [];

    if (this.top === null) {
      return [];
    }

    let node = this.top;
    while (!(node === null)) {
      arr.push(node.data);
      node = node.next;
    }
    
    return arr;
  }

}

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // Your code goes here
  //   let constant = s;
  //   let reverse = '';
  let stack = new Stack();
  
  for (let i = 0; i < s.length; i++) {
    stack.push(s.charAt(i));
  }
  
  //another loop
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== stack.pop()) {
      return 'not a palidrome';
    }
  }

  return 'is a palidrome';

}

function hasParentheses(s) {
  let stack = new Stack();

  for(let i = 0; i < s.length; i++) {
    if (s.charAt(i) === '(') {
      stack.push(s.charAt(i));
    }

    if (s.charAt(i) === ')') {
      if (stack.peek() === null) {
        return 'you are missing a "("';
      }

      if(stack.peek().data === '(') {
        stack.pop();
      }
    }
  }

  if (stack.peek() !== null) {
    return 'you are missing a ")"';
  }

  return 'everything is fine';
  

}

function sortStack(stack) {
  let tmpStack = new Stack();
  while(!stack.isEmpty()) {
    if(tmpStack.isEmpty() || (stack.peek().data < tmpStack.peek().data)) {
      tmpStack.push(stack.pop());
    } else {
      let temp = stack.pop();
      stack.push(tmpStack.pop());
      stack.push(temp);
    }
  }
  return tmpStack.display();
}
// 

function main() {
  const starTrek = new Stack();
  const numbers = new Stack();

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  starTrek.pop();
  starTrek.pop();

  numbers.push(1);
  numbers.push(3);
  numbers.push(2);

  //2 <--last value pushed; pop()
  //3
  //1 <--first value pushed
  //null

  //1
  //2
  //3
  //null

  console.log(sortStack(numbers));
}

main();

/*


*/