// this is hardest part to all of this

//           (15)
//     (7)        (51)
// (4)         (25)   (100)
//                 (37)
//               (32)

// Case 1 - No Child
// If we want to delete (4)
// (4) has no children so if we remove it our Binary Tree is still valid
// So we can just DELETE

// Case 2 - Only One Child
// If we want to delete (7)
// Set Parent to Child
// We take the Parent Pointer to ourselves (7)
// and POINT IT to the Child (4)
// (We remove ourselves similar to a Linked List Operation)

// Case 3 -
// If we want to delete (51) ... what do we do?
// We can't point it to (25) because then what happens to (100)

// We need to reduce our Case to either Case 1 or Case 2

// We go find the LARGEST ELEMENT in our SMALLEST SUBTREE
// We go one step down the subtree to the left and then ALL THE WAY down to the RIGHT
// In this case it is (37)
// And then the rule is restored
// because everything on the left is smaller than
// and everything on the right is larger than

// if there are children of that, then we have to handle that..
// by doing the same operation as above to move (32) to where (25) is
// THIS IS PRETTY INVOLVED

// You can do the REVERSE operation on the right side of the SUBTREE
// We go one step down the tree to the right and then ALL THE WAY DOWN TO THE LEFT
// We find the SMALLEST ELEMENT in our SMALLEST SUBTREE
// And set that element to our Parent
// OR we find the LARGEST on the SMALL SIDE

// Why would you want to choose one style over the other?

// Height of the Tree
// If you keep information in the Node what Height
// You will be able to tell in O(1) which side has a SMALLER HEIGHT
// And then you re-organise the one with the LARGER HEIGHT
// You will SHRINK BACK UP THE TREE
