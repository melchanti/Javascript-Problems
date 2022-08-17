/*
Problem:
  Inout: Odd integer
  Output: display on the screen a diamond
  Rules:
    - The diamond height is the provided number
    - The diamond width is the provided number
    - The middle row in the diamond has n '*'
    - The row above has n - 2 '*' prepended by 1 ' '
    - The row above has n - 4 '*' prepended by 2 ' '
    - and so on until the top row
    - The rows below the middle rows follow the same patter as above
    - There are ((n-1) / 2) rows above and below the middle row
    - To transalate the above,
      - First row would have n - 2*((n - 1) / 2) '*', prepended by ((n-1) / 2) ' '
      - Second row would have n - 2*((n - 3)) / 2) '*', prpended by ((n-3) / 2) ' '
      - Tenth row would have n + 2 *((n-17)) / 2) '*', prepended by ((n-17)) / 2 ' '
    To generalize, each ith row would have n - abs((n-((i - 1) * 2) + 1))) '*' prepedned by ((n - (i - 1) * 2) + 1) / 2

Examples:
  provided

Data Structures:
  Input: Number
  Rules: string

Algorithm:
  - loop from 1 to the number provided
  - print ' ' repeated ((n - (i - 1) * 2) + 1) / 2 followed by '*' repeated n - abs((n-((i - 1) * 2) + 1)))

Hollow diamond:
  Rules:
    Let's take 5 as an example it would be ' '.repeat(2), '*'.repeat(1)
    ' '.repeat(1), '*', ' '.repeat(1), '*'
    '*', ' '.repeat(3), '*'
  Algorithm:
    - Loop from 1 to the number provided
    - print ' ' repeated (Math.abs(((num - ((i * 2) + 1)))) / 2) followed by 1 '*', followed by '*' padded with space using (num - Math.abs((num-((i * 2) + 1)))) - 1
*/

function diamond(num) {
  for (i = 0; i < num; i += 1) {
    let spaces = ' '.repeat(Math.abs(((num - ((i * 2) + 1)))) / 2);
    let stars = '*'.repeat(num - Math.abs((num-((i * 2) + 1))));
    console.log (spaces + stars);
  }
}

function hollowDiamond(num) {
  for (i = 0; i < num; i += 1) {
    let spaces = ' '.repeat(Math.abs(((num - ((i * 2) + 1)))) / 2);
    let stars = '*' + '*'.padStart((num - Math.abs((num-((i * 2) + 1)))) - 1, ' ');
    if (i === 0 || i === num - 1) {
      stars = '*';
    }
    console.log (spaces + stars);
  }
}

diamond(33);
hollowDiamond(33);
