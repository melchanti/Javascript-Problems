/*
Problem:
  input: 3 numbers
  output: string
  Rules:
    - Invalid triangles have sume of angles != 180 or an angle is 0 or less degrees
    - A right triangle has one angle equal to 90 degrees
    - An acute angle has all angles less than 90 degrees
    - An obtuse angle has one angle greater than 90
Data Structure:
  Number
Algorithm:
  - Check if the triangle is invalid
    - all numbers must be greater than 0
    - Angles must equal to 180 degrees
  - Check if a triangle is a right triangle, one angle has to equal 90 degrees
  - Check if a triangle is an obtuse triangle, one angle must be greater than 90
  - Check if a triangle is an acute triangle, all angles must be less than 90
*/

function invalid(min, middle, max) {
  return min <= 0 || (min + middle + max !== 180);
}
function type(min, middle, max) {
  if (max === 90) {
    return 'right';
  } else if (max > 90) {
    return 'obtuse';
  } else {
    return 'acute';
  }
}

function triangle(angle1, angle2, angle3) {
  let [min, middle, max] = [angle1, angle2, angle3].sort((a, b) => a - b);
  if (!invalid(min, middle, max)) {
    return type(min, middle, max);
  } else {
    return 'invalid';
  }
}

console.log(triangle(60, 70, 50)); // 'acute'
console.log(triangle(30, 90, 60)); // 'right'
console.log(triangle(120, 50, 10)); // 'obtuse'
console.log(triangle(0, 90, 90)); // 'invalid'
console.log(triangle(50, 50, 50)); // 'invalid'