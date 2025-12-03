



/*



Recursion: Factorials
Write a function that calculates the factorial of a number recursively.

Examples
factorial(5) ➞ 120

factorial(3) ➞ 6

factorial(1) ➞ 1

factorial(0) ➞ 1
Notes

*/






/*  Solution 1   */


let factorial = n => n ? n * factorial(--n) : 1;

const factorial = n => n === 0 ? 1 : n * factorial(n- 1);

const factorial=n=>Array.from({length:n},(v,i)=>i+1).reduce((a,e)=>a*e,1)

const factorial = n => n < 2 ? 1 : n * factorial(n-1);


/*  Solution 2   */

function factorial(n) {
	if(n==0) {
		return 1;
	}
	return n*factorial(n-1);
}



/*  Solution 3   */

function factorial(n) {
	if (n <= 1) return 1;
	return n = n * factorial(n-1);
}