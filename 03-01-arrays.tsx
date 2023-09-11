// An ArrayBuffer is a contiguous piece of memory you can create in JavaScript
// then you can create views into this data

const a = new ArrayBuffer(6);
console.log(a);
// ArrayBuffer { [Uint8Contents]: <00 00 00 00 00 00>, byteLength: 6 }

// view it as an 8 bit array
// (unsigned 8 bit numbers)
// everytime we increase the offset into it (the index position) it will take the width of that type (8 bits) multiply it by the offset that we give it and then get or edit that value
const a8 = new Uint8Array(a);
console.log(a8);
// Uint8Array(6) [ 0, 0, 0, 0, 0, 0 ]

a8[0] = 45;
console.log(a8);
// Uint8Array(6) [ 45, 0, 0, 0, 0, 0 ]
console.log(a);
// ArrayBuffer { [Uint8Contents]: <2d 00 00 00 00 00>, byteLength: 6 }

a8[2] = 45;
console.log(a8);
// ArrayBuffer { [Uint8Contents]: <2d 00 00 00 00 00>, byteLength: 6 }
console.log(a);
// ArrayBuffer { [Uint8Contents]: <2d 00 2d 00 00 00>, byteLength: 6 }

const a16 = new Uint16Array(a);
console.log(a16);
// Uint16Array(3) [ 45, 45, 0 ]

a16[2] = 0x4545;
console.log(a16);
// Uint16Array(3) [ 45, 45, 17733 ]

console.log(a);
// ArrayBuffer { [Uint8Contents]: <2d 00 2d 00 45 45>, byteLength: 6 }

// Let's look at them in 8 bit units and walk across them 8 bits at a time
// Let's look at them in 16 bit units and walk across them 16 bits at a time

a16[2] = null;
console.log(a);
// ArrayBuffer { [Uint8Contents]: <2d 00 2d 00 00 00>, byteLength: 6 }

// Big O

// a[2]

// O[ ]
//   ^
// a + width * offset
// a + 16 bits * 2

// we don't have to walk to that position
// we know the width of our type
// we know the offset
// multiply them together
// get that posiiton
// read out the value

// they are all O[1]
// because they are all an instant operation
// because no matter how big the index is, we don't do anything extra

// we do a CONSTANT amount of things NO MATTER WHAT the input is
// it does not grow with input at all
