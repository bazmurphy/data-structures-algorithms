---
title: "List DataStructures"
description: "So many lists!"
---

## The second datastructure!

This should be a time filled with exuberance!

### I said something weird earlier.

I said that JavaScript arrays, `const a = [];` is not an array. We know have a
solid definition of an array, is it an array (yes someone answer)? And why
not?

### Next you are going to say HTML isn't a programming language

- neovim is the only true editor
- rust is the greatest language
- linux is the only machine you should develop on

### So lets go to our real first data structure

Its hard to call Array a data structure because its so fundamental. Its
something that is available in every language except the one in this course
because... JavaScript.

### So what sucks about an Array?

- Deletion (why?)
- Insertion (why?)
- Its ungrowable (why?)

### Lets talk LinkedList

So how does it work? (whiteboard)

- Singly Linked
- Doubly Linked

### Lets talk time / space complexity

- prepend / append
- Insertion in the middle
- Deletion from ends
- Deletion in the middle
- Get head / tail
- Get in general

### We wont implement unless we have lots of time

But here is the api

```typescript
interface LinkedList<T> {
  get length(): number;
  insertAt(item: T, index: number): void;
  remove(item: T): T | undefined;
  removeAt(index: number): T | undefined;
  append(item: T): void;
  prepend(item: T): void;
  get(index: number): T | undefined;
}
```
