



/*


Count the Arguments
Create a function that returns the number of arguments it was called with.

Examples
numArgs() ➞ 0

numArgs("foo") ➞ 1

numArgs("foo", "bar") ➞ 2

numArgs(true, false) ➞ 2

numArgs({}) ➞ 1
Notes
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.


*/






/*  Solution 1   */



function numArgs() {
	return arguments.length;
}

/*  Solution 2   */



const numArgs = (...args) => args.length;

/*  Solution 3   */


numArgs = (...a) => a.length || 0



/*  Solution 4   */

function numArgs() {
	return arguments.length;
}



/*  Solution 5   */




