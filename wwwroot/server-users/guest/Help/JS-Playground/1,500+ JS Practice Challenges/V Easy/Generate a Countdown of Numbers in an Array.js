



/*


Generate a Countdown of Numbers in an Array
Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

Examples
countdown(5) ➞ [5, 4, 3, 2, 1, 0]

countdown(1) ➞ [1, 0]

countdown(0) ➞ [0]
Notes
The argument will always be greater than or equal to zero.


*/




c

/*  Solution 1   */


const countdown = start => [...Array(start + 1).keys()].reverse();

const countdown = (start) => Array.from(Array(start + 1).keys()).reverse();





/*  Solution 2   */


function countdown(start) {
	let arr = []
	for(let i=start; i>=0; i--){
		arr.push(i)
	}
	return arr
}


/*  Solution 3   */

function countdown(start) {
	return Array = [start];
}



function countdown(start) {
	let arr = []
	for(let i=start; i>=0; i--){
		arr.push(i)
	}
	return arr
}