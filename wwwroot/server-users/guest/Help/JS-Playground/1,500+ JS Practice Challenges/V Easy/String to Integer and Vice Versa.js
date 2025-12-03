



/*

String to Integer and Vice Versa
Write two functions:

toInt() : A function to convert a string to an integer.
toStr() : A function to convert an integer to a string.
Examples
toInt("77") ➞ 77

toInt("532") ➞ 532

toStr(77) ➞ "77"

toStr(532) ➞ "532"
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.



*/






/*  Solution 1   */

function toInt(str) {
	var a = parseInt(str);
	return a;
}

function toStr(int) {
	return int.toString();
}



/*  Solution 2   */


const toInt = str => Number(str);

const toStr = num => String(num);

const toInt = (str) => parseInt(str);
const toStr = (int) => int.toString();


/*  Solution 3   */


function toInt(str) {
	return parseInt(str, 10);
}

function toStr(int) {
	return int.toString();
}