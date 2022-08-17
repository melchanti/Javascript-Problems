/*
Problem;
  input: odd integer
  output: Display a 8-pointed star
  Rules:
    - Display an 8-point start with the height and width of the given integer (n)
    - The middle row should have n stars
    - The row above should have 3 stars, prepended by (n - 3)/2 ' ' and in between them (n - 7)/2 ' '
    - The row above should have 3 stars, prepended by (n - 5)/2 ' ' and in between them (n - 5)/2 ' '
    - The row above should have 3 stars, prepended by (n - 7)/2 ' ' and in between them (n - 3)/2 ' '
    - To generalize the rule above, each row above the middle row should have 3 stars and in between them (n - (2i + 1))/2 ' '. prepended by (n - (n - ((i - 1)*2)))/2 ' '
    - The row below should have 3 stars, prepended by (n - 3)/2 ' ' and in between them (n - 7)/2 ' '
    - The row below should have 3 stars, prepended by (n - 5)/2 ' ' and in between them (n - 5)/2 ' '
    - The row below should have 3 stars, prepended by (n - 7)/2 ' ' and in between them (n - 3)/2 ' '
    - To generalize the rule above, each row below the middle row should have (n - (2(i - Math.ceil(n / 2)) + 1))/2 ' ', prepended by (n - (n - (((i - Math.ceil(n /2)) - 1)*2)))/2 ' '


 Examples: 9
 *   *   *
  *  *  *
   * * *
    ***
 *********
    ***
   * * *
  *  *  *
 *   *   *

Data Structure: Continue with number
Algorithm:
  - Loop from 1 until the number provided
  - Check if the current iteration is less than Math.ceil(n / 2) or it's equal or larger
    - Less than: Display 3 stars and in between them (n - (2i + 1))/2 ' ', prepended by (n - (n - ((i - 1)*2)))/2 ' '
    - If it's equal, display n stars
    - More than: Display 3 stars with  (n - (n - (((i - Math.ceil(n /2)) - 1)*2)))/2 ' ' in between, prepended by  ' ' repeated (n - (2(i - Math.ceil(n / 2)) + 1))/2
*/

function star(number) {
  for (let i = 1; i <= number; i += 1) {
    let spaceInBetween = 0;
    let starsAndSpace = 0;
    let prependSpaces = 0;
    if (i < Math.ceil(number / 2)) {
      spaceInBetween = (number - (2*i)) / 2;
      prependSpaces = (number - (number - ((i - 1)*2)))/2;
    } else if (i > Math.ceil(number / 2)) {
      prependSpaces = (number - (2*(i - Math.ceil(number / 2)) + 1))/2;
      spaceInBetween = (number - (number - (((i - Math.ceil(number /2)) - 1)*2)))/2;
    } else {
      console.log ('*'.repeat(number));
      continue;
    }

    starsAndSpace = '*' + ' '.repeat(spaceInBetween) + '*' + ' '.repeat(spaceInBetween) + '*';
    console.log(' '.repeat(prependSpaces) + starsAndSpace);
  }
}

star(7);
star(9);
star(23);
