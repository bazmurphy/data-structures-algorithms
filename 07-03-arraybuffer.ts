// an Array Buffer (Ring Buffer) is similar to an an Array List

// 0 [         ] N

// except we are not using 0 as our Head and length as our Tail

// instead we have an index based head and an index based tail
// and anything outside of that is null
// and everything within the head and the tail are the items that you have

// so if you want remove from the head
// you simply +1 to the head
// and therefore move the head one across >
// and cleanup the previous value
// O(1) operation

// same thing with tail, if you want to add to the tail
// add one to the tail
// tail+1

// so pushing, popping, shifting, unshifting are all O(1) operations

// what if you go off the end either way?
// well you loop back back around with the modulo operator

// this.tail % length gives you your index into the array so you can RING around it

// your head can be near the end, and your tail near the start
// and you still have the same thing

// if your tail exceeds your head then you need to resize
// if you need to resize thats where things get a little confusing

// array buffers maintain order, so when you shift or unshift you are not just getting any element
// you are getting the element that was last added into the front
// so if you are only adding to the tail and adding to the front you are simply creating a queue that runs around a ring

// a resize is pretty straightforward
// if you reach a situation where the tail is now where the head is at
// and you are trying to insert
// all you have to do is start at your head go the length and write that into a larger capacity buffer
// and now you have it rewritten in proper order your head would be at 0 and your tail would be at length

// you will write something like a log batcher
// you have a service which needs to batch logs and write logs
// the problem is logs need to maintain order and while you are writing logs new logs can come in
// so you can imagine something that doesn't want to take too long writing logs
// you can use something like an Array Buffer (Ring Buffer)

// you can also use them in Object Pools
// where say you are creating a new user each time, and you don't want to keep creating new objects in memory
// you just use that object, write the values, pass it in, then return it to the Pool
