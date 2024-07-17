function sym(...arrays: number[][]) {
  let result = arrays[0];

  for (let i = 0; i < arrays.length - 1; i++) {
    const currentArray = result;
    const nextArray = arrays[i + 1];
    const newResult: number[] = [];

    currentArray.forEach((nb) => {
      if (!nextArray.includes(nb) && !newResult.includes(nb)) newResult.push(nb);
    });
    nextArray.forEach((nb) => {
      if (!currentArray.includes(nb) && !newResult.includes(nb)) newResult.push(nb);
    });
    result = newResult;
  }
  return result.sort();
}

console.log(sym([1, 2, 3], [5, 2, 1, 4])); // [3, 4, 5]
console.log(sym([1, 2, 3], [5, 2, 1, 4, 5])); // [3, 4, 5]
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])); // [1, 4, 5]
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])); // [2, 3, 4, 6, 7]
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])); // [1, 2, 4, 5, 6, 7, 8, 9]
