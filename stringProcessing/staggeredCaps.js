function staggeredCase(string) {
  let count = 0;
  let staggered = string.split('').map((char, index) => {
    if (count % 2 === 0 && /[a-z]/i.test(char)) {
      count += 1;
      return char.toUpperCase();
    } else if (count % 2 !== 0 && /[a-z]/i.test(char)){
      count += 1;
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join('');

  console.log(staggered);
  return staggered;
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"