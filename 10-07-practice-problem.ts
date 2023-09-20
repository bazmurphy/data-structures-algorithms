// If we are trying to compare two trees and check if they are the same
// They can have the same values
// but the SHAPE of the Tree can be different:

// Example One:

//    (5)
// (3) (0x45)

//    (5)
// (3) (0x45)

// Example Two:

//    (5)
// (3) (0x45)

//      (5)
//    (3)
// (0x45)

// And if we use the wrong algorithm to check it will tell us they ARE the same
// when in fact they ARE NOT

// Breadth First Search would tell us Example Two are the SAME (when they are NOT)

// Depth First Search PRESERVES the SHAPE
// Breadth First Search DOES NOT PRESERVE the SHAPE
