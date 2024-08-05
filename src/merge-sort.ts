function merge(arr1: number[], arr2: number[]) {
  const mergedArray: number[] = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      mergedArray.push(arr2[j++]);
    } else {
      mergedArray.push(arr1[i++]);
    }
  }
  while (i < arr1.length) {
    mergedArray.push(arr1[i++]);
  }
  while (j < arr2.length) {
    mergedArray.push(arr2[j++]);
  }
  return mergedArray;
}

function mergeSort(arr: number[]): number[] {
  if (arr.length === 1) {
    return arr;
  }

  const half = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, half));
  const right = mergeSort(arr.slice(half));

  return merge(left, right);
}

console.log(mergeSort([1, 2])); // [1, 2]
console.log(mergeSort([2, 1])); // [1, 2]
console.log(mergeSort([1, 4, 2, 8])); // [1, 2, 4, 8]
console.log(mergeSort([6, 0, 3, 5])); // [0, 3, 5, 6]
console.log(mergeSort([6, 5, 3, 1, 8, 7, 2, 4])); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])); // [1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234,345, 5643]
