



/*


Next Element in Arithmetic Sequence
Create a function that returns the next element in an arithmetic sequence. In an arithmetic sequence, each element is formed by adding the same constant to the previous element.

Examples
nextElement([3, 5, 7, 9]) ➞ 11

nextElement([-5, -6, -7]) ➞ -8

nextElement([2, 2, 2, 2, 2]) ➞ 2
Notes
All input arrays will contain integers only.


*/






/*  Solution 1   */


function nextElement(arr) {
	return arr[arr.length-1] + arr[1] - arr[0]
}


/*  Solution 2   */

let nextElement=(arr)=>arr[arr.length-1]+(arr[1]-arr[0])


const nextElement = a => (a[1] - a[0]) + a[a.length - 1];

const nextElement = arr => (arr[arr.length - 1]) + (arr[1] - arr[0])

/*  Solution 3   */


function nextElement(arr) {
	return arr[arr.length - 1] + (arr[1] - arr[0]);
}