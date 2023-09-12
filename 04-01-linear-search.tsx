export default function linear_search(
  haystack: number[],
  needle: number
): boolean {
  for (let i = 0; i < haystack.length; ++i) {
    if (haystack[i] === needle) {
      return true;
    }
  }
  return false;
}

const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
console.log(linear_search(foo, 69)); // true
console.log(linear_search(foo, 1336)); // false
console.log(linear_search(foo, 69420)); // true
console.log(linear_search(foo, 69421)); // false
console.log(linear_search(foo, 1)); // true
console.log(linear_search(foo, 0)); // false
