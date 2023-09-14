// you have a node that contains a value
// and a reference (next) to another node (forward)

type node<T> = { value: T; next?: node<T> };

// H(A) -> (B) -> (C) -> (D)

// the Head is the first element (or node)

// you can walk the daisy chain of nodes which contains values

// a single linked list you can only go forward (you can't go back)

// a double linked list you can also go backwards
// so the node has a reference (prev) to the previous node (backward) aswell

type node<T> = { value: T; next?: node<T>; prev?: node<T> };

// we get birectional arrows

// H(A) <-> (B) <-> (C) <-> (D)

// these are called containers?
// heap allocated objects (???) that is usually more expensive than stack allocated

// if we want to insert (F)

// H(A) <-> (F) <-> (B) <-> (C) <-> (D)

// We have to RE-SET the .next
// A -> F
// F -> B

// And we have to RE-SET the .prev
// F <- B
// A <- F

// Therefore INSERTION into a Linked List at a given position it is O(1)
// Nothing is based on input
// No matter how big the value you give me
// No matter how many items are in the list
// It only matters that we have to break 4 Links

// if we want to delete (C)

// H(A) <-> (F) <-> (B) <-> (D)

// We have to break the .next from B -> C and instead point it to D
// We use the C.next value to achieve that

// pseudo-code:
// B = C.prev
// B.next = C.next

// We have to now link D prev to B
// D.prev = C.prev

// And finally we remove C from the graph
// C.prev = C.next = null

// (if you wanted to return the C value you could)
// return C.value

// B and D now point to each other, and C doesnt point to anything

// in Linked List there is no index, you have access to a Node, in which you can traverse to get to a link you desire

// These operations are all CONSTANT (not VARIABLE)
// So DELETING is O(1)

// Strength / Weakness of Linked List:

// Getting Head/Tail is fast (constant time operation)
// Because we have a reference to the Head with a pointer

// Prepend / Append is fast add to the start and end and establish links
// Deletion from Ends is fast

// Insertion/Deletion in the middle can be costly because we have to traverse to that point, the more traversal the higher the cost

// Example of an LinkedList API

interface LinkedList<T> {
  get length(): number;
  insertAt(item: T, index: number): void;
  remove(item: T): T | undefined;
  removeAt(index: number): T | undefined;
  append(item: T): void;
  prepend(item: T): void;
  get(index: number): T | undefined;
}

// as long as you understand how to move around a linked list you can understand all the other data structures
