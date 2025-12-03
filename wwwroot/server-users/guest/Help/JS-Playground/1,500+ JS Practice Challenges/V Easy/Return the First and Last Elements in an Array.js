



/*

Return the First and Last Elements in an Array
Create a function that takes an array of numbers and return the first and last elements as a new array.

Examples
firstLast([5, 10, 15, 20, 25]) ➞ [5, 25]

firstLast(["edabit", 13, null, false, true]) ➞ ["edabit", true]

firstLast([undefined, 4, "6", "hello", null]) ➞ [undefined, null]
Notes
Test input will always contain a minimum of two elements within the array.
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.

*/






/*  Solution 1   */


function firstLast(arr) {
	const last = arr[arr.length - 1]
	var newarr = [arr[0], last]
	return (newarr)
}


/*  Solution 2   */

const firstLast = ([first, ...rest]) => [first, rest.pop()];

const firstLast = arr => [arr.shift(), arr.pop()];




/*  Solution 3   */


function firstLast(arr) {
	return [arr.shift(), arr.pop()]
}