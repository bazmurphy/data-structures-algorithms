function search(curr: BinaryNode<number> | null, needle: number): boolean {
  // base cases

  // we have made it to the bottom of the Binary Tree and the value is not there
  if (!curr) {
    return false;
  }
  // we are less than this value so we must be in the smaller (left) section
  // we are greater than this value so we must be in the larger (right) section
  // therefore we will find it or we will hit a null node eventually

  // if the curr.value is equal to the needle we are searching for we have found the value
  if (curr.value === needle) {
    return true;
  }

  // recursive cases

  // we need to traverse
  // if the value is greater than go search the right larger section
  if (curr.value < needle) {
    return search(curr.right, needle);
  }
  // if the value is less than go search the left smaller section
  return search(curr.left, needle);
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
  return search(head, needle);
}
