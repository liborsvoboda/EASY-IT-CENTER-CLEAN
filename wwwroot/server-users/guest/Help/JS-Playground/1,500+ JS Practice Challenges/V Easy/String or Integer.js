



/*

String or Integer?
Create a function that checks if the argument is an integer or a string. Return int if it's an integer and str if it's a string.

Examples
intOrString(8) ➞ "int"

intOrString("Hello") ➞ "str"

intOrString(9843532) ➞ "int"
Notes



*/






/*  Solution 1   */

function intOrString(param) {
	if(typeof(param) === "number") return "int";
	else return "str";
}



/*  Solution 2   */

const intOrString = (param) => typeof param === "string" ? "str" : "int"



/*  Solution 3   */


function intOrString(param) {
	return typeof param === 'number' ? "int" : "str"
}