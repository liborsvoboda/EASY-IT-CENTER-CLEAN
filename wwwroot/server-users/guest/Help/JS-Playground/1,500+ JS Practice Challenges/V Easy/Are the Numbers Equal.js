



/*

Are the Numbers Equal?
Create a function that returns true when num1 is equal to num2; otherwise return false.

Examples
isSameNum(4, 8) ➞ false

isSameNum(2, 2) ➞  true

isSameNum(2, "2") ➞ false
Notes
Don't forget to return the result.



*/

/*  Solution 1   */

function isSameNum(num1, num2) {
	return num1 === num2
}

/*  Solution 2   */

const isSameNum = (num1, num2) => num1 === num2;


/*  Solution 3   */

function isSameNum(num1, num2) {
	if(num1 === num2) {
		return true;
	}else {
		return false;
	}
}