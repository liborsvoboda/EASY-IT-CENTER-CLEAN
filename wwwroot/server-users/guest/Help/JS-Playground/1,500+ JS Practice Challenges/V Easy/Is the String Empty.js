



/*

Is the String Empty?
Create a function that returns true if a string is empty and false otherwise.

Examples
isEmpty("") ➞ true

isEmpty(" ") ➞ false

isEmpty("a") ➞ false
Notes
A string containing only whitespaces " " does not count as empty.
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.



*/


/*  Solution 1   */
function isEmpty(s) {
	return !s
}



/*  Solution 2   */

function isEmpty(s) {
	return s.length === 0
}


/*  Solution 3   */
const isEmpty = s => s==""?true:false;


