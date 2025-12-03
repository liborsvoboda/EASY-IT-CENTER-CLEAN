



/*



Fraction Greater Than One
Given a fraction as a string, return whether or not it is greater than 1 when evaluated.

Examples
greaterThanOne("1/2") ➞ false

greaterThanOne("7/4") ➞ true

greaterThanOne("10/10") ➞ false
Notes
Fractions must be strictly greater than 1 (see example #3).

*/






/*  Solution 1   */


function greaterThanOne(frac) {
	return eval(frac) > 1 ? true : false;
}


/*  Solution 2   */


const greaterThanOne = frac => eval(frac) > 1;

const greaterThanOne = frac => eval(frac) > 1;

const greaterThanOne = frac => eval(frac) > 1

/*  Solution 3   */


function greaterThanOne(frac) {
	return eval(frac) > 1;
}