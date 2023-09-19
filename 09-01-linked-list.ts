type Node<T> = {
  value: T;
  prev?: Node<T>;
  next?: Node<T>;
};

export default class DoublyLinkedList<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
  }

  private debug() {
    let curr = this.head;
    let out = "";
    for (let i = 0; curr && i < this.length; ++i) {
      out += `${i} => ${curr.value}`;
      curr = curr.next;
    }
    console.log(out);
  }

  prepend(item: T): void {
    // prepending does involve the head
    // where we set a new node at the heads position
    // [1] we want the new item to point to the original first item
    // [2] we want the original first item to point to the new item
    // [3] we want the head to point to the new item
    // (G) <=> (A)
    //  ^head

    // create the node
    const node = { value: item } as Node<T>;

    // make sure to update the number of items in the list
    this.length++;

    // if there is no head, we just set it as the head
    if (!this.head) {
      this.head = this.tail = node;
    }

    node.next = this.head; // (G) -> (A)
    this.head.prev = node; // (G) <- (A)
    this.head = node; // (G) <- head
  }

  insertAt(item: T, idx: number): void {
    // If we wanted to insert (F) between (B) and (C)
    // [1] (F) needs to point to (C) as the next
    // [2] (F) needs to point to (B) as the previous
    // [3] (C) previous needs to point to (F)
    // [4] (B) next needs to point to (F)
    // first attach the new node
    // second break the old links

    // we need to do some preliminary checks of the insert point
    if (idx > this.length) {
      throw new Error("you can't insert a Node beyond the end");
    }

    if (idx === this.length) {
      this.append(item);
      return;
    } else if (idx === 0) {
      this.prepend(item);
      return;
    }

    // make sure to update the number of items in the list
    this.length++;

    let curr = this.head;

    // make sure current exists
    for (let i = 0; curr && i < idx; ++i) {
      curr = curr.next;
    }

    //
    curr = curr as Node<T>;

    // create our new node
    const node = { value: item } as Node<T>;

    // node next needs to equal the current we are going to be inserting at
    // (F) before (C)
    node.next = curr;
    // and node prev needs to equal the curr.prev
    node.prev = curr.prev;
    // so we break the previous links and point them correctly at our node
    curr.prev = node;

    // if the node's previous exists
    if (node.prev) {
      // (F)'s previous which is (B)'s next which is (C) needs to point to (F) instead
      node.prev.next = curr;
    }
  }

  append(item: T): void {
    // attach the node and update the links
    // (Z) attach to (D)
    // (D) attach to (Z)
    // Tail updated to point to (Z)

    // make sure to update the number of items in the list
    this.length++;

    // create the new node
    const node = { value: item } as Node<T>;

    if (!this.tail) {
      this.head = this.tail = node;
      this.debug();
      return;
    }

    // take our tail and point to it
    node.prev = this.tail;
    // update the next value of the tail
    this.tail.next = node;
    // update the tail
    this.tail = node;
    this.debug();
  }

  remove(item: T): T | undefined {
    let curr = this.head;

    for (let i = 0; curr && i < this.length; ++i) {
      if (curr.value === item) {
        // if current value is item we break out of the loop
        break;
      }
      // else we keep scrolling curr until we go to the end of the list
      curr = curr.next;
    }

    // if there is no current then there is no item to remove
    if (!curr) {
      return undefined;
    }

    // there is the node we want to be removed
    // and the possibilities of it being pointed to
    // so we need to take the prev and point over to the next
    // and we need to take the next and point over to the prev
    //  ------->
    // (A) (B) (C)
    //  <-------

    // make sure to update the number of items in the list
    this.length--;

    // if there are no more nodes then set the head and tail to undefined
    if (this.length === 0) {
      const out = this.head?.value;
      this.head = this.tail = undefined;
      return out;
    }

    // remove the current from the linked list by changing the links
    if (curr.prev) {
      curr.prev.next = curr.next;
    }
    if (curr.next) {
      curr.next.prev = curr.prev;
    }
    // at this point we have now removed current from our linked list

    // we can't break this link
    if (curr === this.head) {
      this.head = curr.next;
    }
    //
    if (curr === this.tail) {
      this.tail = curr.prev;
    }

    // we break current away from the linked list
    curr.prev = curr.next = undefined;

    return curr.value;
  }

  get(idx: number): T | undefined {
    let curr = this.head;

    for (let i = 0; curr && i < idx; ++i) {
      curr = curr.next;
    }

    if (!curr) {
      return undefined;
    }

    return curr.value;
  }

  removeAt(idx: number): T | undefined {
    let node = this.head;

    for (let i = 0; node && i < idx; ++i) {
      node = node.next;
    }

    if (!node) {
      return undefined;
    }

    this.length--;

    if (this.length === 0) {
      const out = this.head?.value;
      this.head = this.tail = undefined;
      return out;
    }

    if (node.prev) {
      node.prev.next = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    }

    if (node === this.head) {
      this.head = node.next;
    }
    if (node === this.tail) {
      this.tail = node.prev;
    }

    node.prev = node.next = undefined;

    return node.value;
  }
}
