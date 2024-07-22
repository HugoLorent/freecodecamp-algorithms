function pairwise(arr: number[], arg: number) {
  const usedIndexes: number[] = [];
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (usedIndexes.includes(i)) continue;
    const elem = arr[i];

    for (let j = 0; j < arr.length; j++) {
      if (i === j || usedIndexes.includes(j) || usedIndexes.includes(i)) continue;
      const elem2 = arr[j];
      if (elem + elem2 === arg) {
        usedIndexes.push(i, j);
        total += i + j;
      }
    }
  }
  return total;
}

console.log(pairwise([1, 1, 2], 3)); // 2
console.log(pairwise([7, 9, 11, 13, 15], 20)); // 6
console.log(pairwise([1, 4, 2, 3, 0, 5], 7)); // 11
console.log(pairwise([1, 3, 2, 4], 4)); // 1
console.log(pairwise([1, 1, 1], 2)); // 1
console.log(pairwise([0, 0, 0, 0, 1, 1], 1)); // 10
console.log(pairwise([], 100)); // 0
