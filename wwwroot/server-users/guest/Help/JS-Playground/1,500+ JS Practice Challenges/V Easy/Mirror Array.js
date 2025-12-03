



/*



Mirror Array
Given an array, transform that array into a mirror.

Examples
mirror([0, 2, 4, 6]) ➞ [0, 2, 4, 6, 4, 2, 0]

mirror([1, 2, 3, 4, 5]) ➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]

mirror([3, 5, 6, 7, 8]) ➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]
Notes
Do not repeat the last item of the given array.

*/






/*  Solution 1   */

function mirror(arr) {
	return arr.concat(arr.concat().reverse().slice(1));
}



/*  Solution 2   */

mirror = arr => arr.concat(arr.slice(0,-1).reverse())


const mirror = (arr) => [...arr, ...arr.slice(0,-1).reverse()];

/*  Solution 3   */


function mirror(arr) {
	return [... arr, ... arr.splice(0, arr.length - 1).reverse()]
}