function sum(num) {
  let sum = String(num).split('').reduce((sum, digit) => parseInt(sum) + parseInt(digit));
  console.log(sum);
  return sum;
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45