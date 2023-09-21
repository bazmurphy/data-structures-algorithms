// insert() is a lot like find()

// you effectively have to find your way to a node

// if we wanted to insert 17 into the binary tree:

//        (17)
//   (15)      (50)
// (4) (16)  (25)

// we go down the left side and ask at each stage is this less than
// so we end up adding the 17 as a child of 16 on the RIGHT side because it is larger

//        (17)
//   (15)      (50)
// (4) (16)  (25)
//       (17)

// if we wanted to then insert 18
// we would go down the right side and ask at each stage where to place it
// it would end up being the LEFT child of 25

//          (17)
//   (15)         (50)
// (4) (16)     (25)
//       (17) (18)

// so we with insert() we have to keep going until we hit a point which is NULL

export default function insert(
  node: BinaryNode<number> | null,
  value: number
): BinaryNode<number> {
  if (!node) {
    // Base case: If the node is null, create a new node with the given value.
    return { value, left: null, right: null };
  }

  if (value <= node.value) {
    // If the value is less than the current node's value, recursively insert into the left subtree.
    node.left = insert(node.left, value);
  } else if (value > node.value) {
    // If the value is greater than the current node's value, recursively insert into the right subtree.
    node.right = insert(node.right, value);
  }

  // Return the modified node.
  return node;
}

// Here's a step-by-step breakdown of the algorithm:

// If the current node is null, it means you've reached a leaf node or an empty spot in the tree where you can insert the new value. In this case, you create a new node with the given value and return it as the new node for that position.

// If the current node is not null, you compare the value you want to insert with the value of the current node.

// If the value is less than or equal to the current node's value, you recursively insert the value into the left subtree by calling insert(node.left, value).

// If the value is greater than the current node's value, you recursively insert the value into the right subtree by calling insert(node.right, value).

// After recursively inserting the value into the appropriate subtree, you update the left or right child of the current node accordingly.

// Finally, you return the modified node. In the case of the root node, this ensures that the root is updated if necessary.

// This algorithm maintains the binary search tree property, where all values in the left subtree are less than or equal to the current node's value, and all values in the right subtree are greater than the current node's value.
