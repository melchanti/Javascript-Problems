/*
Problem:
  input: 3 arguments as numbers
  output: string as the description of the triangle
  Rules:
    - Valid triangle must have the length of the two shortes sides larger than the longest side
      and every side must have length greater than 0
    - Equilateral triangle has all three sides of equal length
    - Isosceles triangle has only two sides of equal length
    - Scalene has all three sides of different lengths

Examples:
  console.log(triangle(3, 3, 3)); // "equilateral"
  console.log(triangle(3, 3, 1.5)); // "isosceles"
  console.log(triangle(3, 4, 5)); // "scalene"
  console.log(triangle(0, 3, 3)); // "invalid"
  console.log(triangle(3, 1, 1)); // "invalid"

Data Structure:
  Convert input to an array
Algorithm:
  - Determine if the triangle is invalid
    - Confirm that every side have length larger than 0
    - sort the array from the shortest to the longest
    - Confirm that the sum of the two shortest side is longer than the longest side
  - Return invalid if the triangle is invalid
  - Confirm that every side is equal in length, return 'equilateral' if that's the case
  - Confirm that some of the sides are equal, return 'isosceles'
  - If all the above fail, return 'scalene'
*/

function confirmEquality(num, index, array) {
  if (index === 2) {
    return num === array[0];
  } else {
    return num === array[index + 1];
  }
}
function triangle(num1, num2, num3) {
  let sides = [num1, num2, num3].sort((a, b) => a - b);
  if (sides[0] <= 0) {
    return 'invalid';
  }

  if (sides[0] + sides[1] <= sides[2]) {
    return 'invalid';
  }

  if (sides.every(confirmEquality)) {
    return 'equilateral';
  }

  if (sides.some(confirmEquality)) {
    return 'isosceles';
  }

  return 'scalene';
}

console.log(triangle(3, 3, 3)); // "equilateral"
console.log(triangle(3, 3, 1.5)); // "isosceles"
console.log(triangle(3, 4, 5)); // "scalene"
console.log(triangle(0, 3, 3)); // "invalid"
console.log(triangle(3, 1, 1)); // "invalid"