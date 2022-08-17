function removeVowels(array) {
  let removedVowels = array.map(string => {
    return string.replace(/[aeiou]/ig, '');
  });

  console.log(removedVowels);
  return removedVowels;
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]