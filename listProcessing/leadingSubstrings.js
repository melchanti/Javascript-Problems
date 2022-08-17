function leadingSubstrings(str) {
  let subStrArray = str.split('')
                      .map((_, index) => str.slice(0, index + 1));
  return subStrArray;
}

function substrings(str) {
  let substrings = str.split('').flatMap((_, index) => {
    return leadingSubstrings(str.slice(index,));
  });
  return substrings;
}

function palindromes(str) {
  if (str.length < 2) return []

  let palindromeArray = substrings(str).filter(subStr => {
    let reversed = subStr.split('').reverse().join('');
    return subStr.length > 1 && reversed === subStr;
  });

  console.log(palindromeArray);
  return palindromeArray;
}

/*leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
substrings('abcde');*/

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
palindromes('knitting cassettes');
