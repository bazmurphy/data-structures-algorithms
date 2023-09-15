// create an array
const a: number[] = [];

function time(fn: () => void): number {
  const now = Date.now();
  fn();
  return Date.now() - now;
}

// unshift to "a" X amount of times (add to the front of an array)
function unshift(number: number) {
  for (let i = 0; i < number; ++i) {
    a.unshift(Math.random());
  }
}

// shift from "a" X amount of times (remove from the front of an array)
function shift(number: number) {
  for (let i = 0; i < number; ++i) {
    a.shift();
  }
}

// push to "a" X amount of times (add to the end of an array)
function push(number: number) {
  for (let i = 0; i < number; ++i) {
    a.push(Math.random());
  }
}

// pop from "a" X amount of times (remove from the end of an array)
function pop(number: number) {
  for (let i = 0; i < number; ++i) {
    a.pop();
  }
}

// get based on index
// so if it is a linked list undenearth the hood
// if we get progressively larger indicies we should see a linear slow down
function get(idx: number) {
  return function () {
    return a[idx];
  };
}

function push_arr(count: number) {
  return function () {
    push(count);
  };
}

function pop_arr(count: number) {
  return function () {
    pop(count);
  };
}

function unshift_arr(count: number) {
  return function () {
    unshift(count);
  };
}

function shift_arr(count: number) {
  return function () {
    shift(count);
  };
}

// test with increasing elements (in a step ladder approach)
// if its a linked list then it should be 10x slower each time we increase the number of tests(?)
const tests = [10, 100, 1000, 10000, 100000, 1_000_000, 10_000_000];
console.log("Testing get");
tests.forEach((t) => {
  a.length = 0;
  push(t);
  console.log(t, time(get(t - 1)));
});

// push 1000 items after growing it a certain length
// if push is based on the amount of items within the array
// if any of these are linear based...
// we should theoretically see a slowdown (same thing for the others)
console.log("push");
tests.forEach((t) => {
  a.length = 0;
  push(t);

  console.log(t, time(push_arr(1000)));
});

console.log("pop");
tests.forEach((t) => {
  a.length = 0;
  push(t);

  console.log(t, time(pop_arr(1000)));
});

console.log("unshift");
tests.forEach((t) => {
  a.length = 0;
  push(t);

  console.log(t, time(unshift_arr(1000)));
});

console.log("shift");
tests.forEach((t) => {
  a.length = 0;
  push(t);

  console.log(t, time(shift_arr(1000)));
});

// The results:

// Testing get
// 10 0
// 100 0
// 1000 0
// 10000 0
// 100000 0
// 1000000 0
// 10000000 0

// push
// 10 0
// 100 0
// 1000 0
// 10000 0
// 100000 0
// 1000000 0
// 10000000 0

// pop
// 10 0
// 100 0
// 1000 0
// 10000 0
// 100000 1
// 1000000 0
// 10000000 0

// unshift
// 10 1
// 100 0
// 1000 0
// 10000 1
// 100000 28
// 1000000 185
// 10000000 6494

// shift
// 10 0
// 100 0
// 1000 0
// 10000 1
// 100000 16
// 1000000 395
// 10000000 3839

// get, push and pop are all constant operations O(1)
// unshift and shift are linear growth O(N)

// so we are correct to assume it is an Array List(?)
// we see instant access, instant pushing/popping at the end
// we see linear shifting/unshifting queue/deque

// why? we are shifting over 10,000,000 elements - that should take a long time

// so const a = [] is not an array
// it is an ArrayList

// its not an Array because its growable
// it has the notion of a beginning and an ending
// an Array is usually a static piece of memory
// an ArrayList is a dynamic array
// you have extra operations on top of an Array that you can accordion it depending on what you need

const a = new Uint8Array(10);
a[0] = 5;
a[1] = 5;
a[2] = 69;
console.log(a);
// Uint8Array(10)[(5, 5, 69, 0, 0, 0, 0, 0, 0, 0)];
const b = a.slice(0, 5);
b[3] = 5;
console.log(b);
// Uint8Array(10)[(5, 5, 69, 5, 0)];
console.log(a);
// Uint8Array(10)[(5, 5, 69, 0, 0, 0, 0, 0, 0, 0)];

const buff = Buffer.alloc(5);
console.log(buff instanceof Uint8Array);
// true

buff.writeUint8(5, 0);
console.log(buff);
// <Buffer 05 00 00 00 00>

const buff2 = buff.slice(0, 5);
buff2.writeUInt8(5, 3);
console.log(buff2);
// <Buffer 05 00 00 05 00>

// Buffers in Node are Shallow Sliced
// they just have offsets within this Contiguous Memory Space
// in which they are saying I exist between these two places
// so when you say give me a slice
// i just adjust the indices but still point to the same piece of memory underneath the hood

// for your APIs it looks like a Uint8Array
// but its a Buffer so if you call Slice you are getting a Shallow Slice
// which means you could mutate data you think you are not mutating

// slice can be linear if its copy
// and it can be constant if its just pointing to new spots

// where to use these?
// flushing in general
// things where you batch operations
// and then want to release a bunch of operations
// you are using some sort of Data Structure underneath the hood

// you will see this more on the backend than the frontend
// or if you are writing frontend libraries

// for tv cacheing layer at netflix in javascript, used:
// trees, linked lists and maps
// everything has to be O(1) because we cannot interupt the UI
