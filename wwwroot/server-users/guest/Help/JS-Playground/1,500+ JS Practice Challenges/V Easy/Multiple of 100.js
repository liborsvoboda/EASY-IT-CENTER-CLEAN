



/*

Multiple of 100
Create a function that takes an integer and return true if it's divisible by 100, otherwise return false.

Examples
divisible(1) ➞ false

divisible(1000) ➞ true

divisible(100) ➞ true
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.



*/

/*  Solution 1   */

function divisible(num) {
	return !(num % 100)
}


/*  Solution 2   */

const divisible = num => num % 100 === 0;



/*  Solution 3   */
function divisible(num) {
	return num % 100 === 0;
}