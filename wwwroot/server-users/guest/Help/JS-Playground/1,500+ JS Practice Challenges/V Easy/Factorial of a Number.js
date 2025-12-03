



/*


Factorial of a Number
Create a function that receives a non-negative integer and returns the factorial of that number.

Examples
fact(0) ➞ 1

fact(1) ➞ 1

fact(3) ➞ 6

fact(6) ➞ 720
Notes
Avoid using built-in functions to solve this challenge.


*/






/*  Solution 1   */


function fact(n) {
	return n < 2 ? 1 : n * fact(n - 1)
}


/*  Solution 2   */

const fact = n => n? n * fact(n-1) : 1;

const fact = n => n < 2 ? 1 : n * fact(n-1);

const fact = n => n <= 1 ? 1 : n * fact(n - 1);

fact=n=>n?n*fact(n-1):1







/*  Solution 3   */


const fact = (n) => {
    return n === 0 ? 1 : n * fact(n - 1);
}



function fact(n) {
    return	n===0 || n===1? n=1 : n * fact(n-1)
    }