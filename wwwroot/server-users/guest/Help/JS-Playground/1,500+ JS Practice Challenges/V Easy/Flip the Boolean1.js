



/*

Flip the Boolean
Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.

Examples
reverse(true) ➞ false

reverse(false) ➞ true

reverse(0) ➞ "boolean expected"

reverse(null) ➞ "boolean expected"
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.



*/






/*  Solution 1   */

function reverse(bool) {
	return typeof bool === 'boolean' ? !bool : 'boolean expected'
}



/*  Solution 2   */

const reverse = bool => typeof bool === 'boolean' ? !bool : 'boolean expected';

const reverse = bool => typeof bool==="boolean" ? !bool : "boolean expected";




/*  Solution 3   */


function reverse(bool) {
	if (bool === true) {
		return false
	}
	
	if (bool === false) {
		return true
	}
	else {
		return "boolean expected"
	}
}