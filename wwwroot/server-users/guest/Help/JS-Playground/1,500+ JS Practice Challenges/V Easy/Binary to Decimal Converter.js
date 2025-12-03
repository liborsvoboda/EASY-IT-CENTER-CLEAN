



/*

Binary to Decimal Converter
You are given one input: An array containing eight 1's and/or 0's. Write a function that takes an 8 bit binary number and convert it to decimal.

Examples
binaryToDecimal([1, 1, 1, 1, 1, 1, 1, 1]) ➞ 255

binaryToDecimal([0, 0, 0, 0, 0, 0, 0, 0]) ➞ 0

binaryToDecimal([1, 0, 1, 1, 1, 1, 0, 0]) ➞ 188
Notes
Return an intege



*/






/*  Solution 1   */

function binaryToDecimal(binary) {
	var r = 0, a = binary.reverse();
	for (var i in a) {
		if (a[i]) r += Math.pow(2, i)
	}
	return r;
}



/*  Solution 2   */


function binaryToDecimal(binary) {
	let powers = [128,64,32,16,8,4,2,1];
	let result = [];
	
	for (let i = 0; i < powers.length; i++) {
		result[i] = powers[i] * binary[i]
	}
	
	return result.reduce((acc, curVal) => acc + curVal)
}





/*  Solution 3   */


function binaryToDecimal(binary) {
	return parseInt(binary.join(""), 2);
}