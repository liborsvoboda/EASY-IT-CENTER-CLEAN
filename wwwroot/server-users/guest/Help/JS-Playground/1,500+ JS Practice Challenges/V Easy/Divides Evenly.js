



/*

Divides Evenly
Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

Examples
dividesEvenly(98, 7) ➞ true
# 98/7 = 14

dividesEvenly(85, 4) ➞ false
# 85/4 = 21.25
Notes
a will always be greater than or equal to b.



*/


/*  Solution 1   */
function dividesEvenly(a, b) {
	return a % b == 0
}


/*  Solution 2   */
const dividesEvenly = (a, b) => !(a % b);


/*  Solution 3   */
function dividesEvenly(a, b) {
	return a % b === 0 ? true : false
}