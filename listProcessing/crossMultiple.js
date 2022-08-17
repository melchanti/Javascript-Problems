function multiplyAllPairs(arr1, arr2) {
  let crossMultiple = arr1.reduce((accum, num1) => {
    return accum.concat(arr2.map(num2 => num1 * num2));
  }, []).sort((a, b) => a - b);

  console.log(crossMultiple);

  return crossMultiple;
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]