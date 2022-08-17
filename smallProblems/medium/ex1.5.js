function wordToDigit(string) {
  const numbers = {
    one: 1, two: 2, three: 3, four: 4, five: 5,
    six: 6, seven: 7, eight: 8, nine: 9, zero: 0
  };

  return string.split(' ').map(word => {
    let cleanedWord = word.replace(/[^a-z]/ig, '');
    if (numbers[cleanedWord] !== undefined) {
      let punctuation = word.replace(/[a-z]/ig, '');
      return String(numbers[cleanedWord]) + punctuation;
    }

    return word;
  }).join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));