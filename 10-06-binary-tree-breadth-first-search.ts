// a Breadth First Search is the opposite of a Depth First Search

// so if Depth First Search used a STACK (First In Last Out)
// then Breadth First Search uses a QUEUE (First In First Out)

//        (7)
//   (23)    (8)
// (5) (4) (21) (15)

// you visit one level of the Tree at a time (even if the Tree is sparsely populated)

// 7, 23, 8, 5, 4, 21, 15

// we visit each node and then add it's children to the queue
// when there are no further children we print the node out and then remove it from the queue

// (7) -> (23) -> (8)

// 7

// (23) -> (8) -> (5) -> (4)

// 7, 23

// (8) -> (5) -> (4) -> (21) -> (15)

// 7, 23, 8, 5, 4, 21, 15

// the running time of a Breadth First Search is O(N)
// but if we use a JavaScript Array it will be O(N2) (squared)
// why?
// because JavaScript arrays (actually ArrayLists) have:
// getting : O(1)
// push/pop : O(1)
// shift/unshift : O(N) <-- because it has to re-order all the following elements

// when you add the top level of the tree you have 1 item in the queue
// 7
// when you add it's children you have 2 items in the queue
// 23, 8
// when you add it's chidren you have 4 items in the queue
// 5, 4, 21, 15
// if it went another level you would have 8 items in the queue

// Each time this is Approximately HALF OF THE TREE (half + 1)

// In a Binary Tree - Each Level IF COMPLETE is Approximately HALF the size of the ENTIRE TREE above it
// So if we had to do HALF THE TREE Shifting Off - we would have to do an N amount of work N times
// So N SQUARED
// You should use a Queue when properly implementing a Breadth First Search (or else you will get terrible running times)

// the best thing about a Breadth First Search is we don't need to use Recursion
export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  // we are looking to see does this "needle" number exist within this tree

  // we start the queue with the head
  const q: (BinaryNode<number> | null)[] = [head];

  // while the queue is greater than 0
  while (q.length) {
    // while the queue is not empty:
    // we get the next item out of the queue (dequeue)
    // we then add the next.left item to the queue (enqueue)
    // we then add the next.right item to the queue (enqueue)

    // we remove the first item from the queue
    const curr = q.shift() as BinaryNode<number> | undefined | null;

    // if there are no more items in the queue then leave this iteration
    if (!curr) {
      continue;
    }

    // we check (search)
    // did we find the value we want, if so we can leave the loop
    if (curr?.value === needle) {
      return true;
    }

    // we check the children and push them into the queue
    if (curr.left) {
      q.push(curr.left);
    }
    if (curr.right) {
      q.push(curr.right);
    }

    console.log("q:", q);
  }

  // if we reach here we haven't found the value during our traversal down the tree
  return false;
}
