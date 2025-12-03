



/*


Both Zero, Negative or Positive
Write a function that returns true if both numbers are:

Smaller than 0, OR ...
Greater than 0, OR ...
Exactly 0
Otherwise, return false.

Examples
both(6, 2) ➞ true

both(0, 0) ➞ true

both(-1, 2) ➞ false

both(0, 2) ➞ false
Notes
Inputs will always be two numbers.


*/






/*  Solution 1   */

function both(n1, n2) {
	return n1>0 && n2 > 0 ||n1< 0 && n2<0 || n1==0 && n2==0;
}





/*  Solution 2   */

const both = (n1, n2) => Math.sign(n1) === Math.sign(n2);


const both = (n,m) => !n && !m || n * m > 0


const both = (n1, n2) => Math.sign(n1)===Math.sign(n2)



/*  Solution 3   */


function both(n1, n2) {
	return (n1===0 && n2===0 || n1*n2>0)
}


function both(n1, n2) {
	return n1<0&&n2<0 ? true : n1===0&&n2===0 ? true : n1>0&&n2>0 ? true : false;
}