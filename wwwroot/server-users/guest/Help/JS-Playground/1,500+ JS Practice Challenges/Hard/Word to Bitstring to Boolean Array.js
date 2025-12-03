/*

Word to Bitstring to Boolean Array

Create a function that converts a word to a bitstring and then to a boolean array based on the following criteria:

Locate the position of the letter in the English alphabet (from 1 to 26).
Odd positions will be represented as 1 and even positions will be represented as 0.
Convert the represented positions to boolean values, 1 for true and 0 for false.
Store the conversions into an array.
Examples
toBoolArray("deep") ➞ [false, true, true, false]
// deep converts to 0110
// d is the 4th alphabet - 0
// e is the 5th alphabet - 1
// e is the 5th alphabet - 1
// p is the 16th alphabet - 0

toBoolArray("loves") ➞ [false, true, false, true, true]

toBoolArray("tesh") ➞ [false, true, true, false]


Notes
The letter A is at position 1 and Z at 26.
All input strings are in lowercase letters of the English alphabet.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const toBoolArray = word => 
    [...word]
		.map(i => Boolean(i.charCodeAt() % 2))


//#############################################################
//#  SOLUTION 2  
//#############################################################


const toBoolArray = word => 
		[...word].map(x => (x.charCodeAt() - 96) % 2 ? true : false);



//#############################################################
//#  SOLUTION 3
//#############################################################


function toBoolArray(w) {
	return [...w].map(e=>!!(e.charCodeAt()%2))
}


//#############################################################
//#  SOLUTION 4
//#############################################################


const toBoolArray = (word) => {
	let arr = [];
	let alpha = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];
	for (const element of [...word]) {
		arr.push(alpha.indexOf(element));
	}
	return arr.map((n) => (n % 2 === 0 ? true : false));
};