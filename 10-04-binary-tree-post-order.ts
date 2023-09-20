function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  // what is the base case of a traversal?
  // when we have gone to a node that doesn't exist
  // and we cannot recurse any longer
  if (!curr) {
    return path;
  }

  // pre

  // recurse
  walk(curr.left, path);
  walk(curr.right, path);

  // post
  // we push into the path the value of the current node
  path.push(curr.value);
  return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
  // the empty array is created here
  // and is passed by reference (everytime we then call walk)
  return walk(head, []);
}
