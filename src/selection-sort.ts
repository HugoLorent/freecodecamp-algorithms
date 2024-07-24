function selectionSort(arr: number[]) {
  let sortedArray: number[] = [];
  let unsortedArray: number[] = [...arr];
  let minValue: number = arr[0];
  let minValueIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < unsortedArray.length; j++) {
      const curr = unsortedArray[j];
      if (curr < minValue) {
        minValue = curr;
        minValueIndex = j;
      }
    }
    sortedArray.push(minValue);
    unsortedArray.splice(minValueIndex, 1);
    minValue = unsortedArray[0];
    minValueIndex = 0;
  }

  return sortedArray;
}

console.log(selectionSort([1, 2])); // [1, 2]
console.log(selectionSort([2, 1])); // [1, 2]
console.log(selectionSort([1, 4, 2, 8])); // [1, 2, 4, 8]
console.log(selectionSort([6, 0, 3, 5])); // [0, 3, 5, 6]
console.log(selectionSort([6, 5, 3, 1, 8, 7, 2, 4])); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])); // [1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234,345, 5643]
