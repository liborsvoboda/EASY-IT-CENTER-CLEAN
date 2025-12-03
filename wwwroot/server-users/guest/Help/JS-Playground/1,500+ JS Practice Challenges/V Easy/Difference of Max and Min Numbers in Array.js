



/*

Difference of Max and Min Numbers in Array
Create a function that takes an array and returns the difference between the biggest and smallest numbers.

Examples
diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.

diffMaxMin([44, 32, 86, 19]) ➞ 67
// Smallest number is 19, biggest is 86.
Notes



*/






/*  Solution 1   */

unction diffMaxMin(arr) {
	var largest = arr[0];
	var smallest = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > largest) {
			largest = arr[i]
		}
		if (arr[i] < smallest) {
			smallest = arr[i];
		}
	}
	return largest - smallest;
}



/*  Solution 2   */

const diffMaxMin = a => Math.max(...a) - Math.min(...a);

const diffMaxMin = (arr) => Math.max(...arr) - Math.min(...arr)







/*  Solution 3   */


const s = a => [].concat(...a).sort((x,y) => x-y) 
const diffMaxMin = (...arr) => s(arr).pop()-s(arr).shift()