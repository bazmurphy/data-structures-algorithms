// first data structure on top of a linked list is a queue
// one of the most common data structures

// a queue is just a specific implementation of a linked list

// H(A) -> (B) -> (C) -> (D)T

// a queue is simply a FIFO structure, first in first out

// as with a queue you get into the back of the line

// H(A) -> (B) -> (C) -> (D) -> (E)T

// break the link, and then make E the tail

// tail.next = E
// tail = E

// to pop, we take from the front

// save reference to the head (A)
// const h = head

// set the head to the next value (B)
// head = head.next

// set the original head next value to null
// h.next = null;

// return the original head value
// return h.value;

// H(B) -> (C) -> (D) -> (E)T

// to add/remove from a queue its 2 O(1)
// pushing into a queue (enqueue) is constant
// popping from a queue (deque) is constant

// peek
// head.value

// Constraining things in this way makes things fast, you can only use it in a certain way

type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  // add a new node on the end (at the tail)
  enqueue(item: T): void {
    // create a Node
    const node = { value: item } as Node<T>;

    // we have to keep track of the number of items ourselves
    this.length++;

    if (!this.tail) {
      // if there is no tail then used the newly created Node
      this.tail = this.head = node;
    }

    // take our original tail and point to the new Node
    this.tail.next = node;

    // take our tail and point it to the new Node
    this.tail = node;
  }

  // remove the first node (at the head)
  deque(): T | undefined {
    // if we have no head we can't deque it
    if (!this.head) {
      return undefined;
    }

    // we have to keep track of the number of items ourselves
    this.length--;

    // save our head
    const head = this.head;
    // updated our head pointer to the next node
    this.head = this.head.next;

    // (free) this is not neccessary in JS but to be complete:
    head.next = undefined;

    return head.value;
  }

  // go to the head and get the value from it
  peek(): T | undefined {
    // if we have a head then return it's value
    return this.head?.value;
  }
}
