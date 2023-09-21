// after insertion will it still be balanced

// insertion inherently unbalance a tree

// this is where the different insertion algorithms come into play for balancing

// if you insert something, you walk back up the tree, and check
// and if possible rotate from 4 different combinations
// but the choice comes of algorithm comes with trade offs

// if you insert a lot then you can pick one strategy
// but if not then pick another strategy

// it's possible to remove(delete) the same node
// but using a different strategy we will end up with a different shaped tree

// for a binary search tree
// it must have less than or equal to on the left
// and greater than (and optionally: or equal to) on the right

// if we in order traversal this tree it produces an in order array
// 4, 7, 15, 25, 37, 51, 100
