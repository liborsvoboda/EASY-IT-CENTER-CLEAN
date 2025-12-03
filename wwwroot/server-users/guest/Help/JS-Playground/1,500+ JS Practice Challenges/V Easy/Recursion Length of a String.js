



/*

Recursion: Length of a String
Write a function that returns the length of a string. Make your function recursive.

Examples
length("apple") ➞ 5

length("make") ➞ 4

length("a") ➞ 1

length("") ➞ 0
Notes
Check the Resources tab for info on recursion.



*/



/*  Solution 1   */
const length = ({ length }) => length;

/*  Solution 2   */

const length = (str) => {
	return str.length
}


/*  Solution 3   */
const length = str => str == '' ? 0 : length(str.substring(1)) + 1;