



/*


Solve the Equation
Create a function that takes an equation (e.g. "1+1"), and returns the answer.

Examples
equation("1+1") ➞ 2

equation("7*4-2") ➞ 26

equation("1+1+1+1+1") ➞ 5


*/



/*  Solution 1   */

function equation(s) {
	return eval(s);
}


/*  Solution 2  */

const equation = eval;