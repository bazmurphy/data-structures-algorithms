// the important part here
// to avoid +1 errors
// make sure the low is inclusive and the high exclusive

function bs_list(haystack: number[], needle: number): boolean {
  let low = 0;
  let high = haystack.length;

  // run a loop while low is less than high
  do {
    // set the mid to the center of the array
    const mid = Math.floor(low + (high - low) / 2);
    // set the value to that mid point
    const value = haystack[mid];

    if (value === needle) {
      return true;
    } else if (value > needle) {
      // if the value is greater, set the high point to the mid point
      // to split the array in half
      high = mid;
    } else if (value < needle) {
      // if the value is less than, set the low point to the mid point + 1
      low = mid + 1; // important to drop the mid point(!!!)
    }
  } while (low < high);

  return false;
}

const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
console.log(bs_list(foo, 69)); // true
console.log(bs_list(foo, 1336)); // false
console.log(bs_list(foo, 69420)); // true
console.log(bs_list(foo, 69421)); // false
console.log(bs_list(foo, 1)); // true
console.log(bs_list(foo, 0)); // false
