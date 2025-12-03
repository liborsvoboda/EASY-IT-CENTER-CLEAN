



/*

Return First and Last Parameter
Write two functions:

firstArg() should return the first parameter passed in.
lastArg() should return the last parameter passed in.
Examples
firstArg(1, 2, 3) ➞ 1

lastArg(1, 2, 3) ➞ 3

firstArg(8) ➞ 8

lastArg(8) ➞ 8
Notes
Return undefined if the function takes no parameters.
If the function only takes in one parameter, the firstArg and lastArg functions should return the same value.
JavaScript has an arguments object which keeps track of the parameters being passed in. Check the Resources tab to learn more.



*/






/*  Solution 1   */

const firstArg = (...args) => args.shift();
const lastArg = (...args) => args.pop();



const firstArg = (...args) => args[0];

const lastArg = (...args) => args[args.length - 1];



/*  Solution 2   */

function firstArg() {
	return arguments.length === 0 ? undefined : [...arguments].shift()
}

function lastArg() {
	return arguments.length === 0 ? undefined : [...arguments].pop();
}



/*  Solution 3   */


const firstArg = (...a) => a[0];
const lastArg = (...a) => a[a.length-1];