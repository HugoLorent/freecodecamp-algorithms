function insertionSort(arr: number[]) {
  let sortedArray: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      sortedArray.push(arr[i]);
    } else {
      for (let j = 0; j < sortedArray.length; j++) {
        if (arr[i] < sortedArray[j]) {
          sortedArray = [...sortedArray.slice(0, j), arr[i], ...sortedArray.slice(j)];
          break;
        } else if (j === sortedArray.length - 1) {
          sortedArray.push(arr[i]);
          break;
        }
      }
    }
  }
  return sortedArray;
}

console.log(insertionSort([1, 2])); // [1, 2]
console.log(insertionSort([2, 1])); // [1, 2]
console.log(insertionSort([1, 4, 2, 8])); // [1, 2, 4, 8]
console.log(insertionSort([6, 0, 3, 5])); // [0, 3, 5, 6]
console.log(insertionSort([6, 5, 3, 1, 8, 7, 2, 4])); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])); // [1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234,345, 5643]
