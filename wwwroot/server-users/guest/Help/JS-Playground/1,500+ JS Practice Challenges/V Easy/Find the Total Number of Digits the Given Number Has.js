



/*


Find the Total Number of Digits the Given Number Has
Create a function that takes a number as an argument and returns the amount of digits it has.

Examples
findDigitAmount(123) ➞ 3

findDigitAmount(56) ➞ 2

findDigitAmount(7154) ➞ 4

findDigitAmount(61217311514) ➞ 11

findDigitAmount(0) ➞ 1
Notes
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.


*/






/*  Solution 1   */

function findDigitAmount(num) {
	return num.toString().length;
}



/*  Solution 2   */

const findDigitAmount = num => String(num).length;





/*  Solution 3   */


function findDigitAmount(num) {
	var a = num.toString();
	return a.length;
}