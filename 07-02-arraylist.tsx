// we have an array from 0 to 3

// and we only have one item at the start
// [2, , ]

// so we have a length of 1
// but we have a capacity of 3 (we can store up to 3 numbers)

// so if we had a get operation with an index get(idx)
// we can use a length as a way of checking if the idx is less than or equal to the length

// but if we wanted to push
// we can use the capacity to check do we have the space to push the new item in

// what is the Big O of the running time of push is CONSTANT O(N)
// use the length, write it to the array, increment the length
// because none of those things depend on the input

// pop is the same idea
// we use length - 1
// grab out the value
// decrement the length

// but what happens when we want to push
// when our length is equal to our capacity

// we create a new empty array with double capacity 0[   ]6
// we do a mem copy, we keep the length, and now we can push
// this is effectively what an array list does underneath the hood

// in traditional data structures you will want a capacity
// because they want to know how much memory you want to use (not too much nor too little)

// what about enqueue and deque?

// [2, 3, 5]
// length 3
// capacity 3

// enqueue

// we have to grow our capacity
// we are not able to contain any new items

// capacity 6

// but we cannot just write at the start
// it will overwrite the 2 (at index 0)

// so we have to start at the final value 5
// and tell it to move over one to the right
// repeat this for 3
// repeat this for 2

// now there is an empty spot at the start
// to be able to insert

// so you have to do an O(N) operation to shift all of your values
// and this is not performant

// and that's why people like doing this with queues using nodes because you can do it in O(1)

// the same as the dequeue
// except you move all the values over one to the left

// so this makes Array Lists really good with push and pop
// but really bad with enqueue and dequeue

// if we wanted to delete at a specific index
// everything beyond that point needs to be moved to the left (so there is no gap) again an O(N) operation

// Which one is better?
// It depends on the situation
// if you are only pushing or popping from the end then either a Linked List or an Array List can work well
// you get a little more conveniences becausew ith an ArrayList you also have angle bracket acccessing
// (you can have that with a Linked List but it doesnt often happen)

// you have random access with an Array List (give me index 3) that's constant time
// but you do not have a remove from the front

// so there is a trade-off
// getting sucks on Linked Lists
// removing from the front sucks on ArrayLists
