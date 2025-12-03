



/*

No Conditionals?
Write a function that returns 0 if the input is 1, and returns 1 if the input is 0.

Examples
flip(1) ➞ 0

flip(0) ➞ 1
Notes
Try completing this challenge without using any:

Conditionals
Ternary operators
Negations
Bit operators



*/






/*  Solution 1   */

const flip=y=>Math.abs(~-y)

const flip = y => 1 - y;




/*  Solution 2   */


function flip(y) {
	return 1-y
}


/*  Solution 3   */

function flip(y) {
	return Math.abs(y-1);
}