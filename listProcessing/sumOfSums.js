function sumOfSums(arr) {
  let sum = arr.reduce((accum, num, index) => {
    if (index === 0) {
      accum.push(num);
    } else {
      accum.push(num + accum[index - 1]);
    }
    return accum;
  }, []).reduce((sum, num) => sum + num);

  console.log(sum);
  return sum;
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35