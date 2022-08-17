/*
Algorithm:
  - Write two constant strings of the alphabets upper and lower case letters separately.
  - Split the provided string into an array
  - map the array into a new array
    - For each non-letter character, return it as it's
    - Determine if the letter is lowerCase or upperCase
    - For each letter determine how many times you need to move it based on the provided word
    - Find its replacement letter and return it
  - Join the mapped array and return it
*/

function jumpCharacter(jumpWord, jumpIndex, letter, alphabets) {
  let jump = alphabets.toLowerCase().indexOf(jumpWord[jumpIndex]);
  let newIndex = alphabets.indexOf(letter) + jump;
  while (newIndex >= alphabets.length) {
    newIndex -= alphabets.length;
  }
  return alphabets[newIndex];
}
function vigenereEncrypt(string, jumpWord) {
  const LOWER_ALPHABETS = 'abcdefghijklmnopqrstuvwxyz';
  const UPPER_ALPHABETS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  jumpWord = jumpWord.toLowerCase();
  let stringArray = string.split('');
  let jumpIndex = -1;
  let returnedString = stringArray.map(char => {
    if (/[^a-z]/i.test(char)) {
      return char;
    } else if (/[a-z]/.test(char)) {
      if (jumpIndex < jumpWord.length - 1) {
        jumpIndex += 1;
      } else {
        jumpIndex = 0;
      }
      return jumpCharacter(jumpWord, jumpIndex, char, LOWER_ALPHABETS);
    } else {
      if (jumpIndex < jumpWord.length - 1) {
        jumpIndex += 1;
      } else {
        jumpIndex = 0;
      }
      return jumpCharacter(jumpWord, jumpIndex, char, UPPER_ALPHABETS);
    }
  }).join('');

  console.log(returnedString);
  return returnedString;
}

vigenereEncrypt("Pineapples don't go on pizzas!", 'meat');
vigenereEncrypt("Pineapples don't go on pizzas!", 'A');
vigenereEncrypt("Pineapples don't go on pizzas!", 'Aa');
vigenereEncrypt("Pineapples don't go on pizzas!", 'cab');
vigenereEncrypt("Dog", 'Rabbit');