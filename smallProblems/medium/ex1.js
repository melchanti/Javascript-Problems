/*
Problem:
  input: string
  output: object
  Rules:
  - The object should have three properties, percentage of lowercase, percentage of uppercase and percentage of other chars.
  - The string will always contain at least one character
  - Percentages are to be rounded to two decimals
Examples:
  console.log(letterPercentages('aaaaaa'));
    // {lowercase: "100.00", uppercase: '0.00', neither: '0.00'}
  console.log(letterPercentages('AAAAAA'));
    // {lowercase: "0.00", uppercase: '100.00', neither: '0.00'}
  console.log(letterPercentages('     '));
    // {lowercase: "0.00", uppercase: '0.00', neither: '100.00'}
  console.log(letterPercentages('AbCd +Ef'));
    // {lowercase: "37.5", uppercase: '37.5', neither: '25.00'}
Data Structure:
  Keep the input as string
Algorithm:
  - Use a regex to find the number of characters that are lowercase divide the number by the length of the string to get the percentage
  - Use a regex to find the number of characters that are uppercase divide the number by the length of the string to get the percentage
  - Use a regex to find the number of characters that are neither, divide the number by the length of the string to get the percentage
*/

function letterPercentages(string) {
  let lowercaseArray = string.match(/[a-z]/g) || [];
  let lowercase = ((lowercaseArray.length/ string.length) * 100).toFixed(2);
  let uppercaseArray = string.match(/[A-Z]/g) || [];
  let uppercase = ((uppercaseArray.length/ string.length) * 100).toFixed(2);
  let neitherArray = string.match(/[^a-z]/ig) || [];
  let neither = ((neitherArray.length/ string.length) * 100).toFixed(2);

  return {
    lowercase,
    uppercase,
    neither
  };
}

console.log(letterPercentages('aaaaaa'));
// {lowercase: "100.00", uppercase: '0.00', neither: '0.00'}
console.log(letterPercentages('AAAAAA'));
// {lowercase: "0.00", uppercase: '100.00', neither: '0.00'}
console.log(letterPercentages('     '));
// {lowercase: "0.00", uppercase: '0.00', neither: '100.00'}
console.log(letterPercentages('AbCd +Ef'));
// {lowercase: "37.5", uppercase: '37.5', neither: '25.00'}
console.log(letterPercentages('abCdef 123'));
console.log(letterPercentages('123'));