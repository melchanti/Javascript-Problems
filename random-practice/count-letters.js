function letterCount (string) {

	let hash = {};
	for (letter of string) {
		if (letter.match(/[a-z]/)) {
			if (Object.keys(hash).includes(letter) === true ) {
				hash[letter] += 1;
				continue;
			}
			hash[letter] = 1;
		}

		//console.log (letter);
	}

	return hash;
}

console.log (letterCount('arithmetics'));
console.log (letterCount('codewars'));
console.log (letterCount('activity'));