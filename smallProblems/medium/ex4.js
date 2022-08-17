/*
Problem:
  Input: number as the year
  output: number as the number of Friday the 13ths of that year
  Rules:
    - The year is greater than 1752 and the same calendar will continue to be in use
Examples:
  console.log(fridayThe13ths(1986)); // 1
  console.log(fridayThe13ths(2015)); // 1
  console.log(fridayThe13ths(2017)); // 1
Data Structure:
  Array
Algorithm:
  - Create an Array of all the 13ths days of the given year
  - Filter the created array by the days where the 13ths is a Friday
  - Return the length of the filtered array
*/

function fridayThe13ths(year) {
  let months = ['January', 'February', 'March', 'April', 'May',
                'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let thirteenths = [];
  for (let i = 0; i < months.length; i += 1) {
    thirteenths.push(new Date(`${months[i]}, 13, ${year}`));
  }
  return thirteenths.filter(thirteen => thirteen.getDay() === 5).length;
}

console.log(fridayThe13ths(1986)); // 1
console.log(fridayThe13ths(2015)); // 3
console.log(fridayThe13ths(2017)); // 2