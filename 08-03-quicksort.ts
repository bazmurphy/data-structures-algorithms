// split the input into smaller chunks
// and then go over those smaller subsets and solve things faster
// and then you can resplit it again and again
// so it becomes progressively smaller until it gets to some fundamental unit which you can solve really easily

// QUICK SORT

// O [                ] N

// we pick some element out of the array
// call it P (for Pivot)

// we have an index which starts at O and we walk the entire array until the (P)ivot

// we put all of our items that are smaller than or equal to the Pivot on one side of the Array

// at this point it is called a Weak Sort

// ----------------- full explanation missing

// when you see Quick Sort there is usually 2 functions
// [1] the Partition
// which produces the PIVOT INDEX and MOVES the items that are less than or equal to on one side and the items that are greater than on the other side
// [2] Quick Sort
// which does the Quick Sorting, calls Partition gets the Pivot then recalls Quick Sort, does the base case step and the recursive step,

// this returns "what is the pivot index", where do we weakly sort this array
function partition(arr: number[], lo: number, hi: number) {
  // start the hi position
  const pivot = arr[hi];

  // set the starting index as -1 relative to lo
  let idx = lo - 1;

  // now we walk from the lo to the hi BUT NOT including the hi because the hi is the PIVOT
  // so we do a weak sort on this sub array

  // each element needs to be COMPARED to the PIVOT

  for (let i = lo; i < hi; ++i) {
    // each element needs to be compared to the pivot
    if (arr[i] <= pivot) {
      idx++; // we move it into the first position of the sub-array

      // then we move everything over the beginning of the array that is less than our pivot
      const temp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = temp;
    }
  }

  // increment the index, to move to the correct position
  idx++;

  arr[hi] = arr[idx];
  arr[idx] = pivot;

  // return the pivot index
  return idx;
}

function qs(arr: number[], lo: number, hi: number): void {
  // define the BASE CASES

  // if lo is greater than or equal to high, we have ended the line, and we have stopped needing to recurse
  if (lo >= hi) {
    return;
  }

  // we need to get the pivotIndex and use the partition function from above
  // we pass in the array the low and the high
  // partition will do the weak sort, set the pivot into the correct spot, and then return the pivots index
  const pivotIdx = partition(arr, lo, hi);

  // we need to repeat this again, but not include the pivotIndex on our repeat
  // (it's -1 because its INCLUSIVE endings NOT EXCLUSIVE endings)
  qs(arr, lo, pivotIdx - 1);

  // we need to go to the Pivot AND BEYOND and then to the hi
  qs(arr, pivotIdx + 1, hi);

  // so we repeat the quicksort on one side of the array and the other side of the array
  // but we are not including the pivot
}

export default function quick_sort(arr: number[]): void {
  // unlike most other algorithms we have lo and hi be BOTH INCLUSIVE
  qs(arr, 0, arr.length - 1);
}
