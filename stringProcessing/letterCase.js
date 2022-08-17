function letterCaseCount(string) {
  let lowerCase = string.match(/[a-z]/g) || [];
  let upperCase = string.match(/[A-Z]/g) || [];
  let neither = string.match(/[^a-z]/ig) || [];

  console.log ({
    lowerCase: lowerCase.length,
    upperCase: upperCase.length,
    neither: neither.length,
  });

  return {
    lowerCase: lowerCase.length,
    upperCase: upperCase.length,
    neither: neither.length,
  };
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

