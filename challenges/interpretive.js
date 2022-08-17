/*
Problem:
  input: Integer
  Output: array of numbers
  Rules:
    - First pass you turn all the lights on
    - Second pass, toggle every other light
    - Third pass, toggle every third light
    - Fourth Pass, toggle every fourth pass
    - Repeat until you reach the number of passes as the number of lights
  
  Data Structures:
    Input: Number
    Rules: Array
  
  Algorithm:
    - Create an array of False values representing the light bulbs
    - Start a loop that ends with the number of lights
      - Start an inner loop that ends with the length of the array, starts at 0 and increases by the outerloop index plus 1
        - add 1 to the index of the oy and toggle that switch
    - Reduce the light bulb array to an array of only the indexes that are on
*/

function lightsOn(switches) {
  let lightBulbs = Array.from('f'.repeat(switches));
  for (let num = 0; num < switches; num += 1) {
    for (let i = num; i < lightBulbs.length; i += (num + 1)) {
      if (lightBulbs[i] === 'f') {
        lightBulbs[i] = 't';
      } else {
        lightBulbs[i] = 'f';
      }
    }
  }

  lightBulbs.map(value => value);
  return lightBulbs.reduce((accum, light, index) => {
    if (light === 't') {
      accum.push(index + 1);
      return accum;
    } else {
      return accum;
    }
  }, []);
}

console.log(lightsOn(5));
console.log(lightsOn(100));