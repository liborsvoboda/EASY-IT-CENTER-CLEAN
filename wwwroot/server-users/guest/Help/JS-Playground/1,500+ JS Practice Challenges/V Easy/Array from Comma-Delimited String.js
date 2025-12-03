



/*
Array from Comma-Delimited String
Write a function that turns a comma-delimited list into an array of strings.

Examples
toArray("watermelon, raspberry, orange")
➞ ["watermelon", "raspberry", "orange"]

toArray("x1, x2, x3, x4, x5")
➞ ["x1", "x2", "x3", "x4", "x5"]

toArray("a, b, c, d")
➞ ["a", "b", "c", "d"]

toArray("")
➞ []
Notes




*/






/*  Solution 1   */

function toArray(str) {
	return str.length > 0 ? str.split(", ") : [];
}



/*  Solution 2   */

const toArray = str => str.split(', ').filter(Boolean);

const toArray = s => s ? s.split(", ") : [];



/*  Solution 3   */

function toArray(str) {
	return str.length > 0 ? str.split(', ') : []
}