function buyFruit(arr) {
  let flattened = arr.reduce((accum, subArray) => {
    for (let i = 0; i < subArray[1]; i ++) {
      accum.push(subArray[0]);
    }

    return accum;
  }, []);

  console.log(flattened);
  return flattened;
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);