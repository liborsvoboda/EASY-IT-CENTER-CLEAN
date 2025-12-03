



/*
Most Left Digit
Write a function that takes a string as an argument and returns the left most digit in the string.

Examples
leftDigit("TrAdE2W1n95!") ➞ 2

leftDigit("V3r1ta$") ➞ 3

leftDigit("U//DertHe1nflu3nC3") ➞ 1

leftDigit("J@v@5cR1PT") ➞ 5
Notes
Each string will have at least two numbers.




*/






/*  Solution 1   */

const leftDigit = str => Number(str.match(/[\d]/));





/*  Solution 2   */

function leftDigit(num) {
	var filtered = parseInt(num.split("").filter(elem => !isNaN(elem)).shift());
	
	return filtered;
}



/*  Solution 3   */

const leftDigit = s => +[...s].find(v => !isNaN(+v));

const leftDigit = num => parseInt(num[num.search(/\d/g)])