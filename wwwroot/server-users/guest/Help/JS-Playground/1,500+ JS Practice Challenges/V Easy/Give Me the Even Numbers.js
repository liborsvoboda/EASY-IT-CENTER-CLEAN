



/*

Give Me the Even Numbers
Create a function that takes two parameters (start, stop), and returns the sum of all even numbers in the range.

Examples
sumEvenNumsInRange(10, 20) ➞ 90
// 10, 12, 14, 16, 18, 20

sumEvenNumsInRange(51, 150) ➞ 5050

sumEvenNumsInRange(63, 97) ➞ 1360
Notes
Remember that the start and stop values are inclusive.



*/






/*  Solution 1   */


function sumEvenNumsInRange(start, stop) {
	let even = [];
	for (let i=start; i<=stop; i++) {
		if (i % 2 == 0) {even.push(i)}
	}
	return even.reduce((a,b) => a + b, 0);
}


/*  Solution 2   */

function sumEvenNumsInRange(start, stop) {
	var n = 0;
	for (i = start; i <= stop; i++) {
		if (i % 2 == 0) { n += i; }
	}
	return n;
}



/*  Solution 3   */

function sumEvenNumsInRange(start, stop) {
	let result = 0
	for (let i = start; i<=stop; i++){
		if (i % 2 == 0){
			result=result + i
		}
	}
	return result;
}