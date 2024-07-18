function permAlone(str: string) {
  const regex = /(.)\1+/;
  const strArr = str.split('');
  const permutations: string[] = [];

  function heap(arr: string[], size: number) {
    if (size === 1) {
      permutations.push(arr.join(''));
    } else {
      for (let i = 0; i < size; i++) {
        heap(arr, size - 1);
        if (size % 2 === 0) {
          const tmp = arr[i];
          arr[i] = arr[size - 1];
          arr[size - 1] = tmp;
        } else {
          const tmp = arr[0];
          arr[0] = arr[size - 1];
          arr[size - 1] = tmp;
        }
      }
    }
  }

  heap(strArr, strArr.length);
  return permutations.filter((string) => !string.match(regex)).length;
}

console.log(permAlone('aab')); // 2
console.log(permAlone('aabb')); // 8
console.log(permAlone('abcdefa')); // 3600
console.log(permAlone('abfdefa')); // 2640
console.log(permAlone('zzzzzzzz')); // 0
console.log(permAlone('a')); // 1
console.log(permAlone('aaab')); // 0
console.log(permAlone('aaabb')); // 12
