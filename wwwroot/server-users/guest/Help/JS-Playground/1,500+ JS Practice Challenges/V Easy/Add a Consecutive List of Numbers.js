



/*


Add a Consecutive List of Numbers
Write a function that takes the last number of a consecutive list of numbers and returns the total of all numbers up to and including it.

Examples
addUpTo(3) ➞ 6
// 1 + 2 + 3 = 6

addUpTo(10) ➞ 55
// 1 + 2 + 3 + ... + 10 = 55

addUpTo(7) ➞ 28
// 1 + 2 + 3 + ... + 7 = 28
Notes
You will only be given valid inputs.
There are various ways of doing this; try finding them!
Remember to return the result.


*/






/*  Solution 1   */

function addUpTo(n) {
	return n*(n+1)/2;
}



/*  Solution 2   */

const addUpTo = n => n * (n + 1) / 2;

const addUpTo = n => n ===	0 ? 0 : n === 1 ? 1 : n + addUpTo(n - 1);

const addUpTo = n => (n*n + n) >> 1;

const addUpTo = n => n * (n+1) / 2

/*  Solution 3   */


function addUpTo(n) {
	return (n * (n+1)) / 2;
}



function addUpTo(n) {
	var sum =0;
	for(i=1;i<=n;i++){
		sum +=i;
	}
	return sum;
}