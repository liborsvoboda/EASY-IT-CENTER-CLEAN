



/*

Check Factors
Write a function that returns true if all integers in an array are factors of a number, and false otherwise.

Examples
checkFactors([2, 3, 4], 12) ➞ true
// Since 2, 3, and 4 are all factors of 12.

checkFactors([1, 2, 3, 8], 12) ➞ false
// 8 is not a factor of 12.

checkFactors([1, 2, 50], 100) ➞ true

checkFactors([3, 6], 9) ➞ false
Notes



*/






/*  Solution 1   */


function checkFactors(factors, num) {
	return factors.every(factor => num % factor === 0);
}


/*  Solution 2   */

const checkFactors = (factors, n) => factors.every(x => n % x == 0);



const checkFactors = (factors, num) =>  factors.filter(x => num%x === 0).length === factors.length;






/*  Solution 3   */


function checkFactors(factors, num) {
	let isFactor = true;
	let factorCheck = factors.map(x => {
		if (num % x !== 0) {
			isFactor = false;
		}
	});
	return isFactor;
}