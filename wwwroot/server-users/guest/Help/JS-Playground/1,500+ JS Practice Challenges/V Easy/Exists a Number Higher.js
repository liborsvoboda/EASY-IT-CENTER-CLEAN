



/*

Exists a Number Higher?
Write a function that returns true if there exists at least one number that is larger than or equal to n.

Examples
existsHigher([5, 3, 15, 22, 4], 10) ➞ true

existsHigher([1, 2, 3, 4, 5], 8) ➞ false

existsHigher([4, 3, 3, 3, 2, 2, 2], 4) ➞ true

existsHigher([], 5) ➞ false
Notes
Return false for an empty array [].



*/






/*  Solution 1   */

function existsHigher(arr, n) {
	return Math.max(...arr)>=n
}



/*  Solution 2   */

const existsHigher = (arr, n) => arr.some(num => num >= n);


existsHigher = (a, n) => Math.max(...a) >= n



/*  Solution 3   */


function existsHigher(arr, n) {
	return arr.some(el=>el>=n);
}