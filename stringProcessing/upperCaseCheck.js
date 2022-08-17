function isUppercase(string) {
  let upperCase = string.toUpperCase();
  console.log(upperCase === string);
  return upperCase === string;
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true