export default function compare(
  a: BinaryNode<number> | null,
  b: BinaryNode<number> | null
): boolean {
  // our signature is
  // A can either be a BinaryNode or null
  // B can either be a BinaryNode or null

  // What's our Base Cases? (solving the simple problem such that the entire recursion becomes simple)

  // [1] if both a and b are null they are equal
  // "have we made it into both subtrees where we cannot recurse any further?"
  // are we both going to a null node together? because that means structurally we are the exact same
  if (a === null && b === null) {
    return true;
  }

  // [2] at this point if either a is null OR b is null then they are NOT equal
  // if one of us is null and the other is a node then structurally we are not the same
  // so we have traversed the same point but have different structure
  if (a === null || b === null) {
    return false;
  }

  // [3] if the values are not the same then they are NOT equal (value check)
  if (a.value !== b.value) {
    return false;
  }

  // how do we do this for the entire tree now?

  // we recurse and compare the left values and right values
  // and so long as we keep returning true for this expression
  // it will keep bubbling back up as true all the way to the end
  return compare(a.left, b.left) && compare(a.right, b.right);
}

// we go through each node which itself is a sub-tree (with potential children)
// and we compare those sub-trees
