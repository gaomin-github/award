function twoTarget1(arr, target) {
  //   arr = arr.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return [i, j];
    }
  }
  return null;
}

// console.log(twoTarget1([1, -1, 3, 4, 5, 6], 3));
