function sumSquareDifference(number) {
  let arr = Array.from(Array(number + 1).keys());
  let squareOfSum = arr.reduce((sum, num) => sum += num) ** 2;
  let sumOfSquares = arr.reduce((sum, num) => sum += (num ** 2), 0);
  return squareOfSum - sumOfSquares;
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150