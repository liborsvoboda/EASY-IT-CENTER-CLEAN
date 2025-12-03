



/*


Largest Swap
Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

To illustrate:

largestSwap(27) ➞ false

largestSwap(43) ➞ true
If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.

Examples
largestSwap(14) ➞ false

largestSwap(53) ➞ true

largestSwap(99) ➞ true
Notes
Numbers with two identical digits (third example) should yield true (you can't do better).


*/






/*  Solution 1   */

function largestSwap(num) {
	var newNum = num.toString();
	if (num >= newNum.charAt(1) + newNum.charAt(0)) return true;
	return false; 
}



/*  Solution 2   */

const largestSwap = (num) => Number(num.toString().split('').reverse().join('')) <= num;

const largestSwap = num => Math.floor(num / 10) >= num % 10;

largestSwap = n => (''+n)[0]>=(''+n)[1]

const largestSwap = (num) => parseInt(num.toString().split('').reverse().join('')) <= num

const largestSwap = n => n/10 > n%10

const largestSwap = num => num >= Number(String(num).split('').reverse().join(''));



/*  Solution 3   */


function largestSwap(num) {
	return parseInt(num.toString().split('').reverse().join('')) <= num;
}