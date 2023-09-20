//        (7)
//   (23)      (3)
// (5) (4)  (18) (21)

// PRE ORDER TRAVERSAL

// visitNode()
// recurseL()

// start at the root
// get the value (7)
// go down to the left
// get the value (23)
// go again down to the left
// get the value (5)
// until no more
// then go back up
// go down to the right
// get the value (4)
// until no more
// go all the way back up
// go down to the right
// get the value (3)
// go down to the left
// get the value (18)
// until no more
// go back up and go down to the right
// get the value (21)
// finished
// [ see 10-1-trees-2.png ]

// 7, 23, 5, 4, 3, 18, 21

// IN ORDER TRAVERSAL

// recurseL()
// visitNode()
// recurseR()

// start at the root
// go all the way down the tree to the left
// get the value (5)
// go back up one
// get the value (23)
// go down to the right
// get the value (4)
// go all the way back up to the root
// get the value (7)
// go down to the right
// go down to the left
// get the value (18)
// go back up one
// get the value (3)
// go down to the right
// get the value (21)

// 5, 23, 4, 7, 18, 3, 21

// POST ORDER TRAVERSAL

// recurseL()
// recurseR()
// visitNode()

// start at the root
// go all the way down the left
// get the value (5)
// go back up one
// go down to the right
// get the value (4)
// go back up one
// get the value (23)
// go back up the root
// go down to the right
// go down to the left
// get the value (18)
// go back up one
// go down to the right
// get the value (21)
// go back up one
// get the value (3)
// go back up one
// get the root value (7)

// 5, 4, 23, 18, 21, 3, 7

// NOTICE THE PATTERN OF WHERE THE ROOT NODE IS

// PRE (beginning)
// 7, 23, 5, 4, 3, 18, 21
// IN ORDER (middle)
// 5, 23, 4, 7, 18, 3, 21
// POST (end)
// 5, 4, 23, 18, 21, 3, 7

// But what is the running time of this?
// What is our INPUT
// Remember: Running Time is always the Growth with respect to the Input

// The Input is the whole tree
// We have to visit every single Node in the tree

// It grows linearly
// So its O(N)

// These types of traversals are called DEPTH FIRST TRAVERSAL / DEPTH FIRST SEARCH
// because if we do an IN ORDER traversal
// we go LEFT ALL THE WAY until we can no longer go left

// we go as deep as possible in this tree on the left hand side
// and then visit the node
// and then we go right once, and go left as deep as possible
// we always go DEPTH FIRST
