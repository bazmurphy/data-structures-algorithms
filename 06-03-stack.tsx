// a stack is backwards to a queue

// (A) <- (B) <- (C) <- (D)H

// a stack is like a stack of plates
// if you get an error you get a stack trace
// and thats the stack of functions you have called up until that point

// a stack is a singlely linked list in which you only add or remove from the head

// so to add to a stack
// we add a node E
// and then we point E to head
// and then we update head to point to E

// (A) <- (B) <- (C) <- (D) <- (E)H

// to remove from a stack
// we save the original head
// then we update the head to point to the new head (next or previous depending how you created it)
// return the original head

// TIP: look at the world of calling functions like a stack
// good mental model

// with a queue you enqueue and deque
// but with a stack you push and you pop

type Node<T> = {
  value: T;
  prev?: Node<T>;
};

export default class Stack<T> {
  public length: number;
  private head?: Node<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    // create a new node
    const node = { value: item } as Node<T>;

    // keep track of the number of items
    this.length++;

    // if there is no head, set it to the newly created node
    if (!this.head) {
      this.head = node;
      return;
    }

    // point the new node to the original head
    node.prev = this.head;

    // make the head point to new node
    this.head = node;
  }

  pop(): T | undefined {
    // we either keep it at zero or we count down (whichever is larger)
    this.length = Math.max(0, this.length - 1);

    // we remove the head
    if (this.length === 0) {
      // save a pointer to the original head
      const head = this.head;
      // remove the head
      this.head = undefined;
      // return the original head value
      return head?.value;
    }

    // save a pointer to the node we are about to remove so we can access it
    const head = this.head as Node<T>;

    // update head to re-point back to the previous node
    this.head = head.prev;

    // in other languages you would have to free this item
    head.prev = undefined;

    // return the value of the node that is removed
    return head.value;
  }

  peek(): T | undefined {
    // if we had a head we return the value
    return this.head?.value;
  }
}
