function bubbleSort(array) {
  let swapped = false;

  do {
    swapped = false;
    array.forEach((num, index) => {
      if (num > array[index + 1]) {
        [array[index], array[index + 1]] = [array[index + 1], array[index]];
        swapped = true;
      }
    });
  } while (swapped);
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]