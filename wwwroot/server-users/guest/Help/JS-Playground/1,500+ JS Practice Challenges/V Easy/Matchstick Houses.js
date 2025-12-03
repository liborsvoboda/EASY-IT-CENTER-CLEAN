



/*


Matchstick Houses
This challenge will help you interpret mathematical relationships both algebraically and geometrically.

Matchstick Houses, Steps 1, 2 and 3

Create a function that takes a number (step) as an argument and returns the amount of matchsticks in that step. See step 1, 2 and 3 in the image above.

Examples
matchHouses(1) ➞ 6

matchHouses(4) ➞ 21

matchHouses(87) ➞ 436
Notes
Step 0 returns 0 matchsticks.
The input (step) will always be a non-negative integer.


*/






/*  Solution 1   */

let matchHouses=n=>!n?0:5*n+1;

matchHouses = a => a && a*5+1

matchHouses = a => a && a*5+1


const matchHouses = step => (step ? (temp = 5 * step + 1) : 0);



/*  Solution 2   */

function matchHouses(step) {
	return step===0 ? 0 : 5*(step-1)+6
}




/*  Solution 3   */


function matchHouses(step) {
	return step === 0 ? 0 : 5 * step + 1;
}