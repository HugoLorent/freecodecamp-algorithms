function bubbleSort(arr: number[]) {
  const arrCopy = [...arr];

  for (let i = 0; i < arrCopy.length; i++) {
    for (let j = 0; j < arrCopy.length; j++) {
      const curr = arrCopy[j];
      const next = arrCopy[j + 1];

      if (curr > next) {
        arrCopy[j] = next;
        arrCopy[j + 1] = curr;
      }
    }
  }

  return arrCopy;
}

console.log(bubbleSort([1, 2])); // [1, 2]
console.log(bubbleSort([2, 1])); // [1, 2]
console.log(bubbleSort([1, 4, 2, 8])); // [1, 2, 4, 8]
console.log(bubbleSort([6, 0, 3, 5])); // [0, 3, 5, 6]
console.log(bubbleSort([6, 5, 3, 1, 8, 7, 2, 4])); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])); // [1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234,345, 5643]
