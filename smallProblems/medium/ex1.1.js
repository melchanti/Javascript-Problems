function rotateArray(arr) {
  if (!arr || !Array.isArray(arr)) {
    return undefined;
  } else if (arr.length === 0) {
    return [];
  }

  let newArr = [];

  arr.forEach((element, index) => {
    if (index !== 0) {
      newArr.push(element);
    }
  });

  newArr.push(arr[0]);
  return newArr;
}

function rotateRightmostDigits(number, digits) {
  let numArray = String(number).split('');
  let requiredRotation = numArray.slice(numArray.length - digits);

  let completedArray = numArray.slice(0, numArray.length - digits).concat(rotateArray(requiredRotation));
  let rotatedNumber = parseInt(completedArray.join(''));

  return rotatedNumber;
}

function maxRotation(number) {
  let numString = String(number);
  for (let i = numString.length; i > 0; i--) {
    number = rotateRightmostDigits(number, i);
  }

  console.log(number);
  return number;
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845