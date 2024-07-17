function updateInventory(arr1: [number, string][], arr2: [number, string][]) {
  const itemsMap: Map<string, number> = new Map();
  const largestArray = arr1.length >= arr2.length ? arr1 : arr2;
  const smallestArray = arr1.length < arr2.length ? arr1 : arr2;

  for (let i = 0; i < largestArray.length; i++) {
    const itemLargestArray = largestArray[i][1];
    const valueLargestArray = largestArray[i][0];

    for (let j = 0; j < smallestArray.length; j++) {
      const itemSmallestArray = smallestArray[j][1];
      const valueSmallestArray = smallestArray[j][0];

      if (itemSmallestArray === itemLargestArray) {
        itemsMap.set(itemLargestArray, valueLargestArray + valueSmallestArray);
      } else if (!itemsMap.has(itemSmallestArray)) {
        itemsMap.set(itemSmallestArray, valueSmallestArray);
      }
    }

    if (!itemsMap.has(itemLargestArray)) {
      itemsMap.set(itemLargestArray, valueLargestArray);
    }
  }
  return Array.from(itemsMap.keys())
    .sort((a, b) => a.localeCompare(b))
    .map((key) => {
      const value = itemsMap.get(key);
      if (value !== undefined) return [value, key];
    });
}

console.log(
  updateInventory(
    [
      [21, 'Bowling Ball'],
      [2, 'Dirty Sock'],
      [1, 'Hair Pin'],
      [5, 'Microphone'],
    ],
    [
      [2, 'Hair Pin'],
      [3, 'Half-Eaten Apple'],
      [67, 'Bowling Ball'],
      [7, 'Toothpaste'],
    ]
  )
); // [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]

console.log(
  updateInventory(
    [
      [21, 'Bowling Ball'],
      [2, 'Dirty Sock'],
      [1, 'Hair Pin'],
      [5, 'Microphone'],
    ],
    []
  ) // [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]
);

console.log(
  updateInventory(
    [],
    [
      [2, 'Hair Pin'],
      [3, 'Half-Eaten Apple'],
      [67, 'Bowling Ball'],
      [7, 'Toothpaste'],
    ]
  ) // [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]
);

console.log(
  updateInventory(
    [
      [0, 'Bowling Ball'],
      [0, 'Dirty Sock'],
      [0, 'Hair Pin'],
      [0, 'Microphone'],
    ],
    [
      [1, 'Hair Pin'],
      [1, 'Half-Eaten Apple'],
      [1, 'Bowling Ball'],
      [1, 'Toothpaste'],
    ]
  ) // [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]]
);
