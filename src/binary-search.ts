function binarySearch(searchArray: number[], value: number) {
  const arrayPath: number[] = [];

  let left = 0;
  let right = searchArray.length - 1;
  let middle = Math.floor(right / 2);

  while (searchArray[middle] !== value) {
    const elem = searchArray[middle];
    arrayPath.push(elem);

    if (right < left) {
      return 'Value Not Found';
    }

    if (value > elem) {
      left = middle + 1;
      middle = left + Math.floor((right - left) / 2);
    } else {
      right = middle - 1;
      middle = left + Math.floor((right - left) / 2);
    }
  }

  arrayPath.push(searchArray[middle]);
  return arrayPath;
}

const testArray = [0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 49, 70];

console.log(binarySearch(testArray, 0)); // [13, 5, 2, 0]
console.log(binarySearch(testArray, 1)); // [13, 5, 2, 0, 1]
console.log(binarySearch(testArray, 2)); // [13, 5, 2]
console.log(binarySearch(testArray, 6)); // Value Not Found
console.log(binarySearch(testArray, 11)); // [13, 5, 10, 11]
console.log(binarySearch(testArray, 13)); // [13]
console.log(binarySearch(testArray, 70)); // [13, 19, 22, 49, 70]
