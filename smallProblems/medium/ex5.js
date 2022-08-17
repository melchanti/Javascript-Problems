function digitsOnce(number) {
  let digits = [];
  while (number) {
    let digit = number % 10;
    if (digits.includes(digit)) {
      return false;
    }
    digits.push(digit);
    number = parseInt(number / 10);
  }

  return true;
}

function featured(number) {
  let multiplier = Math.trunc(number / 7);
  let multiple = multiplier * 7;
  if (multiplier % 2 === 0) {
    multiplier = multiplier + 1;
    multiple = multiplier * 7;
  }
  while (multiple <= 9876543201) {
    if (multiple > number && digitsOnce(multiple)) {
      return multiple;
    }

    multiplier += 2;
    multiple = 7 * multiplier;
  }

  return "There is no possible number that fulfills those requirements";
}

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."