



/*


Does a Number Exist?
Create a function which validates whether a given number exists, and could represent a real life quantity. Inputs will be given as a string.

Examples
validStrNumber("3.2") ➞ true

validStrNumber("324") ➞ true

validStrNumber("54..4") ➞ false

validStrNumber("number") ➞ false
Notes
Accept numbers such as .5 and 0003.

*/






/*  Solution 1   */


function validStrNumber(n) {
	return !isNaN(n)
}


/*  Solution 2   */

const validStrNumber = str => !Number.isNaN(Number(str));

const validStrNumber = n => !isNaN(n)

const validStrNumber = n => !isNaN(n)

/*  Solution 3   */


function validStrNumber(n) {
	return Number(n) == 0 || !!Number(n);
}



function validStrNumber(n) {
	return isNaN(n) ? false : true;
}