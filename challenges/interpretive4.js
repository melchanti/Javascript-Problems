/*
Problem:
  input: string
  output: string
  Rules:
    - Perform a Caesar Cipher
    - Each letter is substituted by the letter that comes after it n times in the alphabets
    - It's case sensitvie
    - spaces and non-letters are left as is

Examples:
provided

Data Structure:
  Input: represent it as an array
  Rules: Have two strings, one for uppercase and one for lowercase

Algorithm:
  - Convert the string to an array
  - map the array of letters into a new array
    - for each non-letter character, return it as it's
    - Determine if the letter is lowercase or uppercase
    - Find the position of the letter in the upperCase or lowerCase string
    - Add number to the index of the letter, if the resulting number is bigger than the length of the upperCase or lowerCase string, subtract the length from the result
      - keep going until you get a number less than the length
  - join the mapped array and return it.
*/

function caesarEncrypt(string, jump) {
  const lowerCharacters = 'abcdefghijklmnopqrstuvwxyz';
  const upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let stringArray = string.split('');
  let returnedString = stringArray.map(char => {
    if (/[^a-z]/i.test(char)) {
      return char;
    } else if (/[a-z]/.test(char)) {
      let newIndex = lowerCharacters.indexOf(char) + jump;
      while (newIndex >= lowerCharacters.length) {
        newIndex -= lowerCharacters.length;
      }

      return lowerCharacters[newIndex];
    } else {
      let newIndex = upperCharacters.indexOf(char) + jump;
      while (newIndex >= upperCharacters.length) {
        newIndex -= upperCharacters.length;
      }
      return upperCharacters[newIndex];
    }
  }).join('');

  console.log(returnedString);
  return returnedString;
}

// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 51);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"