// Binary Search Tree BST

// A binary search tree, is still a tree, but there is a rule that has to be applied at every node

// The one rule is that:
// to the left has to be LESS THAN OR EQUAL TO
// to the right has to be GREATER THAN

// this looks a lot like Quick Sort (re: the pivot)

// It's like Binary Search on an Array
// we split the thing in half
// and then say, are you the value?
// if you are the value then we leave
// if its not the value then we say:
// if i am larger than the current value
// i will only be on the right side of the tree
// if i am less than
// i will only be on the left side of the tree

// find is effectively is doing a simplified version of a binary search on an array

// it is much easier to do a find on a binary search tree than it is on an ordered array

// because you don't have to manage the lo and hi

// it's a depth first search with an order of how we should traverse

// here's the psuedo code:

export default function find(
  node: BinaryNode<number> | null,
  value: number
): boolean {
  if (!node) {
    return false;
  }

  if (node.value === value) {
    return true;
  }

  // if the node value is less than we need to go to the right (to the larger value section)
  if (node.value < value) {
    return find(node.right, value);
  }

  // if the node value is greater than we need to go to left (to the smaller value section)
  return find(node.left, value);
}

// what is the running time of the find algorithm
// you would be inclined to say log(N)
// because we are splitting in half everytime
// but that is not quite accurate

// it is O(H)
// O of HEIGHT
// What is the HEIGHT of our TREE
// if you have a complete binary tree it will be log(N)
// and if you have an incomplete binary tree it will be N
// so it has its own range depending on how balanced the tree is log(N) to N
// two common methods are AVL and Red Black Trees

// we have to preserve the case
// we cannot have 17 in the second row because
// it's right child would have to then be 18 which breaks the rule

//        (17)
//   (15)      (50)
// (4) (16)  (25)
//          ()  ()
//      18-25     26-50
