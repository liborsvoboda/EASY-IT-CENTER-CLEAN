



/*


Burrrrrrrp
Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.

Examples
longBurp(3) ➞ "Burrrp"

longBurp(5) ➞ "Burrrrrp"

longBurp(9) ➞ "Burrrrrrrrrp"
Notes
Expect num to always be >= 1.
Remember to use a capital "B".
Don't forget to return the result.


*/






/*  Solution 1   */

const longBurp = n => `Bu${'r'.repeat(n)}p`;



/*  Solution 2   */

const longBurp = (num) => 'Bu' + 'r'.repeat(num) + 'p'







/*  Solution 3   */


function longBurp(num) {
	return "Bur" + Array.apply(null, {length: num-1}).map(value=> 'r').join("") + "p"	
}