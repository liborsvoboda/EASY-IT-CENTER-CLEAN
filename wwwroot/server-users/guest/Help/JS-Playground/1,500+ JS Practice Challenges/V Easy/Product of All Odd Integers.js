



/*


Product of All Odd Integers
Create a function that returns the product of all odd integers in an array.

Examples
oddProduct([3, 4, 1, 1, 5]) ➞ 15

oddProduct([5, 5, 8, 2, 4, 32]) ➞ 25

oddProduct([1, 2, 1, 2, 1, 2, 1, 2]) ➞ 1
Notes


*/






/*  Solution 1   */

const multiply = arr => arr.reduce((total, num) => total * num, 1);

const isOdd = num => num % 2 !== 0;

const oddProduct = arr => multiply(arr.filter(isOdd))



/*  Solution 2   */

const oddProduct = (arr) => arr.reduce((sum, val) => val%2!==0 ? sum * val : sum * 1, 1);

const oddProduct = arr => [...arr].filter(x => x % 2).reduce((x, i) => x * i);

oddProduct= (arr)=>arr.filter(x=> x %2 !== 0).reduce((a,b)=> a*b)


/*  Solution 3   */

function oddProduct(arr) {
	return arr.reduce((a, c) => c % 2 !== 0 ? a * c : a  , 1);
}