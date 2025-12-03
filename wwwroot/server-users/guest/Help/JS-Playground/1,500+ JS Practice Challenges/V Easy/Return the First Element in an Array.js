



/*


Return the First Element in an Array
Create a function that takes an array and returns the first element.

Examples
getFirstValue([1, 2, 3]) ➞ 1

getFirstValue([80, 5, 100]) ➞ 80

getFirstValue([-500, 0, 50]) ➞ -500



*/



/*  Solution 1   */

const getFirstValue = arr => arr[0];


/*  Solution 2   */
function getFirstValue(arr) {
	return arr[0];
}

/*  Solution 3   */

const getFirstValue = (arr) => arr[0]


/*  Solution 4   */
function getFirstValue(arr) {
	let firstOne = arr[0];
	return firstOne;
}