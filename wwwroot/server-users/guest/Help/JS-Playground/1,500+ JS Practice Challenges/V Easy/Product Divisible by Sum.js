



/*


Product Divisible by Sum?
Write a function that returns true if the product of an array is divisible by the sum of that same array. Otherwise, return false.

Examples
divisible([3, 2, 4, 2]) ➞ false

divisible([4, 2, 6]) ➞ true
// 4 * 2 * 6 / 4 + 2 + 6

divisible([3, 5, 1]) ➞ false
Notes


*/






/*  Solution 1   */

function divisible(arr) {
	return arr.reduce((a, c) => a * c, 1) % arr.reduce((a, c) => a + c) === 0
}



/*  Solution 2   */


const sum = arr => arr.reduce((total, num) => total + num, 0);

const multiply = arr => arr.reduce((total, num) => total * num, 1);

const divisible = arr => multiply(arr) % sum(arr) === 0;


/*  Solution 3   */

divisible = a => !(a.reduce((a, b) => a*b) % a.reduce((a, b) => a+b))


const divisible = a => 	a.reduce((t, c) => t*c, 1)%a.reduce((t, c) => t+c, 0) == 0;





function divisible(arr) {
    
    return arr.reduce((acc,val)=>acc*val)%arr.reduce((acc,val)=>acc+val)==0?true:false