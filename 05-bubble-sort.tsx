function bubble_sort(arr: number[]): void {
  for (let i = 0; i < arr.length; ++i) {
    // we remove the amount off the end that is the length - 1 - i (the current index)
    // 1st iteration n - 1
    // 2nd iteration n - 2
    // etc
    for (let j = 0; j < arr.length - 1 - i; ++j) {
      console.log(arr.length - 1 - i);
      // swap the values if the first is greater than the second
      if (arr[j] > arr[j] + 1) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

const arr = [9, 3, 7, 4, 69, 420, 42];
console.log(bubble_sort(arr));
// [3, 4, 7, 9, 42, 69, 420]
