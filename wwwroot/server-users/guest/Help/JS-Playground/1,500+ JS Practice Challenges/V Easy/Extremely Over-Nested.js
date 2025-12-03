



/*



Extremely Over-Nested
Create a function that returns the original value from a matrix with too many sub-arrays.

Examples
deNest([[[[[[[[[[[[3]]]]]]]]]]]]) ➞ 3

deNest([[[[[[[true]]]]]]]) ➞ true

deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]]) ➞ "edabit"
Notes
You only need to retrieve one element.

*/






/*  Solution 1   */


function deNest(arr) {
	return arr.flat(Infinity)[0];
}


/*  Solution 2   */

const deNest = arr => arr.flat(Infinity)[0]

const deNest = arr => arr.flat(Infinity)[0];

const deNest=a=>a.flat(Infinity)[0]

const deNest = (arr) => arr.flat(Infinity)[0]

const deNest = arr => arr.flat(Infinity)[0];


/*  Solution 3   */


function deNest(arr) {
	var res = arr.flat(Infinity);
	return res[0];
}



function deNest(arr) {
	var newArray = arr.flat(Infinity);
	return newArray[0];
}


function deNest(arr) {
	return arr.flat(Infinity)[0];
}