// These types of traversals are called DEPTH FIRST TRAVERSAL / DEPTH FIRST SEARCH
// because if we do an IN ORDER traversal
// we go LEFT ALL THE WAY until we can no longer go left

// we go as deep as possible in this tree on the left hand side
// and then visit the node
// and then we go right once, and go left as deep as possible
// we always go DEPTH FIRST

// we are using a STACK

// we PUSH (7) on the stack
// we PUSH (23) on the stack
// we PUSH (5) on the stack
// we cannot go any further so we POP (5) OFF
// we PUSH (4) on the stack
// we cannot go any further so we POP (4) OFF
// we cannot go any further so we POP (23) OFF
// we cannot go any further so we POP (7) OFF

// we are implicitly using how we call functions as a STACK
// it helps you visualise recursion
// to realise you are just PUSHING and POPPING on a STACK

// so we can technically do any of these traversals without recursion
// we just have to add the children to a STACK
