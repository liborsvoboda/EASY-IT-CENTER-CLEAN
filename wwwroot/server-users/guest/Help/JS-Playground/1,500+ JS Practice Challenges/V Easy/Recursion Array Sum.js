



/*

Recursion: Array Sum
Write a function that finds the sum of an array. Make your function recursive.

Examples
sum([1, 2, 3, 4]) ➞ 10

sum([1, 2]) ➞ 3

sum([1]) ➞ 1

sum([]) ➞ 0
Notes
Return 0 for an empty array.
Check the Resources tab for info on recursion.



*/






/*  Solution 1   */


function sum(arr) {
	let sum = 0
	for (let i = arr.length; i--; ) {
		sum += arr[i]
	}
	// return arr.reduce((a, c) => a + c, 0)
	return sum
}




function sum(arr) {
	return arr.reduce((a,b) => a + b, 0)
}




/*  Solution 2   */

const sum = arr => arr.length == 0 ? 0 : arr.pop() + sum(arr)




function sum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

/*  Solution 3   */


function sum(arr) {
	return arr.length > 0 ? arr.reduce((a, b) => a + b) : 0
}